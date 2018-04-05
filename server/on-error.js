
const Rollbar = require('rollbar')

const rollbar = new Rollbar({
  accessToken: '',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: process.env.NODE_ENV || 'development'
  }
})

module.exports = (err, ctx) => {
  const status = err.status = err.status || err.statusCode || 500

  // ignore client errors
  if (status >= 400 && status < 500) return

  // handle rollbar errors here
  rollbar.error(err, ctx && ctx.req)

  // remove if-statement if you always want to log
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack)
  }
}
