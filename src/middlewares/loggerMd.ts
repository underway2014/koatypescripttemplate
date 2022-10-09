import logger from "../logger";
import moment from "moment";
import Koa from 'koa'

export default function genLoggerMd() {
    return async (ctx:Koa.DefaultContext , next: any) => {
        const begin = new Date().getMilliseconds()
        await next()
        var cost = new Date().getMilliseconds() - begin
        logger.info(
            '%s %s -- %s %s %s HTTP/%s, %s %s %sms',
        moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
        ctx.get('X-Real-IP') || ctx.ip || '',
        ctx.method,
        ctx.url,
        ctx.status,
        ctx.req.httpVersion,
        ctx.length || null,
        ctx.header['user-agent'],
        cost)
    }
}