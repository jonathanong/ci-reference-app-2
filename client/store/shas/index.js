
import { getSha as getShaFromApi } from '../../api-sdk/shas'
import onError from '../../on-error'
import { ADD } from './actions'

export const getSha = (dispatch) => async (text) => {
  try {
    const result = await getShaFromApi(text)
    dispatch({
      type: ADD,
      payload: result
    })
    return result
  } catch (err) {
    onError(err)
  }
}
