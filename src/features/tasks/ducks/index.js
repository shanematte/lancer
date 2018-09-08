import {
  TASKS_DATA_RECEIVED,
  TASKS_DATA_REQUESTED,
  FILTERS_RECEIVED,
  CLEAR_TASK,
  CLEAR_TASKS,
  ACCEPT_ALL,
  TASK_RECEIVED,
  ACTIONS_RECEIVED,
  CREATION_INFO_RECEIVED,
  ACTION_CREATED,
  CREATE_TASK,
  EDIT_TASK,
  TASKS_DATA_SAVES,
  CHANGE_SEARCH_TITLE,
} from './actions';
import { push } from 'react-router-redux';


const initialState = {
  tasksData: [],
  saveTasks:[],
  hasMore: true,
  searchTitle:'Need a copy',
  filters: {
    categories: [],
    prices: { min: 0, max: 1000000 },
    tags: [],
    statuses: [],
  },
  current: {
    creator: {},
  },
  requests: [],
  creationInfo: {
    categories: [],
    tags: [],
    currencies: [],
  },
};


export default (state = initialState, action) => {
  const requests = state.requests.slice();
  switch (action.type) {
    case TASKS_DATA_REQUESTED:
      return {
        ...state,
        // TODO Show spinner here
      };

    case CHANGE_SEARCH_TITLE:
      return {
        ...state,
        searchTitle:action.value
      };

    case TASKS_DATA_RECEIVED:
      return {
        ...state,
        tasksData: action.payload.results,
        saveTasks: action.payload.results,
        hasMore: Boolean(action.payload.next),
      };

    case TASKS_DATA_SAVES:
      return {
        ...state,
        saveTasks: action.payload.results,
      };

    case 'TASK_ADD_TAG' :
      return {
        ...state,
        creationInfo: {
          ...state.creationInfo,
          tags:[...state.creationInfo.tags, action.tag]
        }
      };

    case TASK_RECEIVED:
      return {
        ...state,
        current: action.payload,
      };

    case ACTIONS_RECEIVED:
      return {
        ...state,
        requests: action.payload,
      };

    case ACTION_CREATED:
      requests.unshift(action.payload);
      return {
        ...state,
        requests,
      };

    case ACCEPT_ALL:
      return {
        ...state,
        requests: requests.map((e) => {
          if (e.status === 'waiting for review') {
            e.status = 'accepted';
          }
          return e;
        }),
      };

    case FILTERS_RECEIVED:
      return {
        ...state,
        filters: action.payload,
      };

    case CREATE_TASK:
      return {
        ...state,
      };

    case EDIT_TASK:
      return {
        ...state,
      };

    case CLEAR_TASK:
      return {
        ...state,
        current: {
          creator: {},
        },
      };

    case CLEAR_TASKS:
      return {
        ...state,
        tasksData: [],
        hasMore: true,
      };

    case CREATION_INFO_RECEIVED:
      return {
        ...state,
        creationInfo: action.payload,
      };

    default:
      return state;
  }
};
