/**
 * Created by Freeman on 2017/11/14.
 */
const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');// 请求体JSON解析
const onerror = require('koa-onerror'); //错误处理
const routes = require('./src/routes');

const result = require('./src/middles/result')

require('./src/models/db')

const app = new Koa()

onerror(app);

// middleware
app.use(logger());

app.use(bodyParser());

//处理error和success
app.use(result())

app.use(routes());

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.on('error', (error, ctx) => {
  console.log('server error:' + error)
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`quiz-server listening on ${port}`);