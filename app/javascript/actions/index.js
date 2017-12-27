import * as types from '../constants/ActionTypes'
import Api from '../api.js'

export function getMessages() {
  return dispatch => {
    Api.get('api/messages')
      .then(res => {
        dispatch({ type: types.GET_MESSAGES, payload: res.data.messages })
      }
        )
      .catch(err => console.err(err))
  }
}

export function submitMessage(message) {
  return { type: types.SUBMIT_MESSAGE, payload: message }
}
