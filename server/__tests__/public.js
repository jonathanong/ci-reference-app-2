
const request = require('supertest')
const app = require('..')

const server = app.listen()

afterAll(() => server.close())

test('GET /assets/babel-polyfill/polyfill.min.js', () => (
  request(server)
    .get('/assets/babel-polyfill/polyfill.min.js')
    .expect(200)
))
