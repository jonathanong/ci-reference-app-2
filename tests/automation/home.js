
const { By, until } = require('selenium-webdriver')

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
    await driver.get(domain)
    await driver.wait(until.urlContains(domain))
  })

  step('Submit text.', async () => {
    /* const input = */ await driver.wait(until.elementLocated(By.css('input')))
  })

  step('Expect a result.', async () => {

  })
}
