
import { createSha as createShaFromApi } from '../../api-sdk/shas'
import onError from '../../on-error'
import { ADD } from './actions'

export const createSha = (dispatch) => async (text) => {
  try {
    const result = await createShaFromApi(text)
    dispatch({
      type: ADD,
      payload: result
    })
    return result
  } catch (err) {
    alert(`Error creating sha for ${text}.`)
    onError(err)
  }
}
