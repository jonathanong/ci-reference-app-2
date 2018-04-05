
const app = module.exports = require('./app')
require('./routes')

if (!module.parent) {
  const port = process.env.PORT || 3220
  app.listen(port, function (err) {
    if (err) {
      console.error(err.stack)
      process.exitCode = 1
      return
    }

    console.log('Serving IMS at http://localhost:%s', this.address().port)
  })
}
