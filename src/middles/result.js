/**
 * Created by Freeman on 2017/11/14.
 */

module.exports = () => async (ctx, next) => {
  ctx.error = ({data, msg, status, error}) => {
    ctx.status = status || 400
    ctx.body = {code: -200, msg, data, error}
  }

  ctx.success = ({data, msg}) => {
    ctx.status = 200
    ctx.body = {code: 200, msg, data,}
  }

  ctx.notfound = () =>{
    ctx.status = 404
  }
  await next()
}