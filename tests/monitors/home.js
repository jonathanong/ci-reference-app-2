
const puppeteer = require('puppeteer')

const { domain } = require('../config')

async function monitor ({ parameters }) {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()

  // do stuff

  await page.close()
  await browser.close()
}

exports.slowThreshold = '30s'
exports.monitors = [
  {
    id: domain,
    parameters: {
      url: domain,
      selector: 'input'
    },

    monitor,

    slowThreshold: '2s',
    timeout: '10s',
    retries: 1
  }
]
