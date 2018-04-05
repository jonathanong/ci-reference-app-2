
const { createHash } = require('./shas')
const app = require('./app')

app.use(async (ctx, next) => {
  if (ctx.path === '/ping') {
    ctx.body = 'pong'
    return
  }

  if (ctx.method === 'POST' && ctx.path === '/api/v1/shas') {
    ctx.assert(ctx.request.is('json', 415, 'Only JSON is accepted.'))
    const { text } = await ctx.request.json()
    ctx.body = createHash(text)
    return
  }

  return next()
})
