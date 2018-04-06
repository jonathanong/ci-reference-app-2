
import { createStore } from 'redux'
// import assert from 'assert'

import reducer from '../reducer'
import { createSha } from '..'

test('update images', async () => {
  // do stuff

  const store = createStore(reducer)
  const sha = await createSha(store.dispatch)('1234')

  // do stuff
  console.log(sha) // so lint passes
})
