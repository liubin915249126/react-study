const koa = require('koa');
const router = require('koa-router')();
var cors = require('koa2-cors');
const app = new koa();

router.get('/', async (ctx, next)=>{
    ctx.response.body = '111';
    await next();
});

app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('server is start at port 3000')
});