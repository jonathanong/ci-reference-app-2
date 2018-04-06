
// const request = require('supertest')
// const assert = require('assert')

const app = require('..')

const server = app.listen()

afterAll(() => server.close())

test('POST /api/v1/shas', async () => {

})
