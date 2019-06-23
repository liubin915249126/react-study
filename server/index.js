const koa = require('koa')
const router = require('koa-router')()
var cors = require('koa2-cors')
var path = require('path');
var fs = require('fs')
const app = new koa()


router.get('/index', async (ctx, next) => {
  // var data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let data = {
    films:'films'
  }
  ctx.response.body = data
  await next()
})

// app.use(cors({
//   origin: function (ctx) {
//     if (ctx.url === '/test') {
//       return false
//     }
//     return '*'
//   },
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//   maxAge: 5,
//   credentials: true,
//   allowMethods: ['GET', 'POST', 'DELETE'],
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept']
// }))

router.get('*', function(ctx, next) {
  fs.readdir(path.join('./', 'work','index.html'))
  ctx.type = 'html';
  ctx.body =fs.createReadStream(path.join('./', 'work','index.html'));
});

app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000, () => {
  console.log('server is start at port 3000')
})
