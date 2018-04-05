
import { createStore } from 'redux'
import assert from 'assert'

import reducer from '../reducer'
import { createSha } from '..'

global.fetch = require('jest-fetch-mock')

test('update images', async () => {
  fetch.once(JSON.stringify({
    sha: 'asdf'
  }))

  const store = createStore(reducer)

  const sha = await createSha(store.dispatch)('1234')
  assert.equal(sha, 'asdf')

  const shas = store.getState()
  assert(shas.some(x => x === 'asdf'))
})
