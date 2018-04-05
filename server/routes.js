
const { createSha } = require('./shas')
const render = require('./render')
const app = require('./app')

app.use(async (ctx, next) => {
  if (ctx.path === '/ping') {
    ctx.body = 'pong'
    return
  }

  if (ctx.path === '/') {
    ctx.body = render(ctx)
    return
  }

  if (ctx.method === 'POST' && ctx.path === '/api/v1/shas') {
    ctx.assert(ctx.request.is('json', 415, 'Only JSON is accepted.'))
    const { text } = await ctx.request.json()
    ctx.body = { sha: createSha(text) }
    return
  }

  return next()
})
