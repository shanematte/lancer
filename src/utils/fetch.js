import { SessionToken } from './session';
import { encodeBody } from './index';


class Fetch {
  static configure(props) {
    Fetch._ep = props.entryPoint;
    Fetch._onError = props.onError || console.error;
  }

  static _getDataForBodyQueries(method, query) {
    const data = {
      method,
      body: JSON.stringify(query),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    return data;
  }

  static _getDataForRequestQueries(method, query) {
    return [{ method }, encodeBody(query)];
  }

  static _sendRequest({
    path, params, onSuccess, onError = (e) => Fetch._onError(e), responseValidator = (response) => false, message = 'Загрузка', next = false,
  }) {
    if (!params.headers) {
      params.headers = {};
    }
    const token = SessionToken.get();

    if (token) {
      params.headers.Authorization = `Token ${token}`;
    }
    fetch(`${Fetch._ep}${path}`, params)
      .then(response => {
        const error = responseValidator(response);

        if (error) {
          throw error;
        } else {
          return response.json();
        }
      })
      .then(jsonResponse => {
        onSuccess(jsonResponse);
        if (!next) {
        }
      })
      .catch(e => {
        onError(e.message);
      });
  }

  static get(props) {
    const [params, pathQuery] = Fetch._getDataForRequestQueries('GET', props.query);

    Fetch._sendRequest({
      ...props,
      path: pathQuery ? `${props.path}?${pathQuery}` : props.path,
      params,
    });
  }

  static post(props) {
    Fetch._sendRequest({
      ...props,
      params: Fetch._getDataForBodyQueries('POST', props.query),
    });
  }

  static put(props) {
    Fetch._sendRequest({
      ...props,
      params: Fetch._getDataForBodyQueries('PUT', props.query),
    });
  }

  static patch(props) {
    Fetch._sendRequest({
      ...props,
      params: Fetch._getDataForBodyQueries('PATCH', props.query),
    });
  }

}

export default Fetch;
