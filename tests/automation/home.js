
// const { By, until } = require('selenium-webdriver')

const { domain } = require('../config')

exports.description = `
Submit text to the form.
`

exports.options = {}
exports.parameters = {
  domain
}

exports.test = ({
  driver,
  step,
  parameters
}) => {
  // const { domain } = parameters

  step('Visit the page.', async () => {

  })

  step('Submit text.', async () => {

  })

  step('Expect a result.', async () => {

  })
}
