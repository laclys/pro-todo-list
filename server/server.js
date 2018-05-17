const koa = require('koa')

const pageRouter = require('./router/dev-ssr')

const app = new koa()

const isDev = process.env.NODE_ENV === 'development'

app.use(async(ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch(err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
