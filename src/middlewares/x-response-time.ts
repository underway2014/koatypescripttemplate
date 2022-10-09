import Koa from 'koa'

export default async (ctx:Koa.DefaultContext, next:any) => {
    const start = new Date().getMilliseconds()
    await next()
    const ms = new Date().getMilliseconds() - start
    ctx.set('X-Response-Time', ms + 'ms')
}
