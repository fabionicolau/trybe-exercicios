const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => dispatch(getImage(data)))
      .catch(error => dispatch(failedRequest(error)))
  };
}

// export function fetchDog() {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('https://dog.ceo/api/breeds/image/random')
//       const data = await response.json()
//       dispatch(getImage(data))
//     } catch (error) {
//       dispatch(failedRequest(error))
//     }
//   };
// }