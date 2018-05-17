const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  const context = { url: ctx.path }
  try {
    const appString = await renderer.renderToString(context) // { url: '/public/bundle.js' }

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })

    ctx.body = html
  } catch (err) {
    console.log('render error',err)
    throw err
  }

}