import { ajaxRequest, compileQuery } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';
import { ERROR } from 'redux/actions';
import { push } from 'react-router-redux';

export const CLEAR_TASKS = 'CLEAR_TASKS';
export const CLEAR_TASK = 'CLEAR_TASK';
export const ACCEPT_ALL = 'ACCEPT_ALL';
export const TASKS_DATA_REQUESTED = 'TASKS_DATA_REQUESTED';
export const TASKS_DATA_RECEIVED = 'TASKS_DATA_RECEIVED';
export const FILTERS_RECEIVED = 'FILTERS_RECEIVED';
export const TASK_RECEIVED = 'TASK_RECEIVED';
export const ACTIONS_RECEIVED = 'ACTIONS_RECEIVED';
export const ACTION_CREATED = 'ACTION_CREATED';
export const CREATION_INFO_RECEIVED = 'CREATION_INFO_RECEIVED';
export const CREATE_TASK = 'CREATE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TASKS_DATA_SAVES = 'TASKS_DATA_SAVES';
export const CHANGE_SEARCH_TITLE = 'CHANGE_SEARCH_TITLE';

import _ from 'underscore'

export const getTasksData = (method, page, filters) => dispatch => {
  dispatch({ type: TASKS_DATA_REQUESTED });

  filters.page = page;
  const query = compileQuery(filters);

  ajaxRequest(`/${method}${query}`, {}, SessionToken.get())
    .then(response => {
      dispatch({
        type: TASKS_DATA_RECEIVED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const getTasksDataFilter = (method, page, filters, status) => dispatch => {
  dispatch({ type: TASKS_DATA_REQUESTED });

  filters.page = page;
  const query = compileQuery(filters);

  ajaxRequest(`/${method}${query}`, {}, SessionToken.get())
    .then(response => {

      let updateTasksData = []

      if(status != 'All'){
        updateTasksData = _.where(response.results, {
          status:status
        })

      }else{

        updateTasksData = response.results
        
      }

      dispatch({
        type: TASKS_DATA_RECEIVED,
        payload: {
          results:updateTasksData,
          hasMore:false
        },
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const getTaskData = id => dispatch => {
  ajaxRequest(`/tasks/${id}/`, {}, SessionToken.get())
    .then(response => {
      dispatch({
        type: TASK_RECEIVED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const getRequests = id => dispatch => {
  ajaxRequest(`/tasks/${id}/actions/`, {}, SessionToken.get())
    .then(response => {
      dispatch({
        type: ACTIONS_RECEIVED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const newRequest = id => dispatch => {
  ajaxRequest(`/tasks/${id}/actions/`, { method: 'POST' }, SessionToken.get())
    .then(response => {
      dispatch({
        type: ACTION_CREATED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const acceptAll = id => dispatch => {
  ajaxRequest(
    `/tasks/${id}/actions/accept-all/`,
    { method: 'POST' },
    SessionToken.get(),
  )
    .then(response => {
      dispatch({
        type: ACCEPT_ALL,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const getFilterParams = (path, currency = '') => dispatch => {
  const method = `filters/${path}`;
  ajaxRequest(`/${method}?currency=${currency}`, {}, SessionToken.get())
    .then(response => {
      dispatch({
        type: FILTERS_RECEIVED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const getTaskCreationInfo = () => dispatch => {
  ajaxRequest('/creation-info/', {}, SessionToken.get())
    .then(response => {
      dispatch({
        type: CREATION_INFO_RECEIVED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const activateTask = taskId => dispatch => {
  ajaxRequest(
    `/tasks/${taskId}/activate/`,
    { method: 'POST' },
    SessionToken.get(),
  )
    .then(response => {
      dispatch({
        type: CREATE_TASK,
        payload: taskId,
      });
      dispatch(push(`/tasks/${taskId}`));
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
      dispatch(push('/dashboard/customer/'));
    });
};

export const createTask = data => dispatch => {
  console.log('*&&&&&&&&&')
  console.log(data)

  ajaxRequest(
    '/tasks/',
    { method: 'POST', body: data },
    SessionToken.get(),
  ).then(response => {
    const taskId = response.id;
    dispatch(activateTask(taskId));
  });
};

export const editTask = (id, data) => dispatch => {
  ajaxRequest(
    `/tasks/${id}/`,
    { method: 'PATCH', body: data },
    SessionToken.get(),
  )
    .then(response => {
      dispatch({
        type: EDIT_TASK,
      });
      dispatch(push(`/tasks/${id}/`));
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
      dispatch(push(`/tasks/${id}/`));
    });
};

export const cleanTasks = () => dispatch => {
  dispatch({ type: CLEAR_TASKS });
};

export const clearTask = () => dispatch => {
  dispatch({ type: CLEAR_TASK });
};
