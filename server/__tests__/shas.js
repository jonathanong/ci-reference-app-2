
const assert = require('assert')

const { createSha } = require('../shas')

test('createSha(text)', () => {
  const sha = createSha('asdf')
  assert(/^[0-9a-z]+$/.test(sha))
})
