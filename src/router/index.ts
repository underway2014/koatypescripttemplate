import Koa from 'koa'
import Router from "koa-router"
import User from '../models/user'

import logger from '../logger'

const router: Router = new Router()
console.log('__dirname rr:', __dirname);
router.get("/", async (ctx: Koa.DefaultContext) => {
 
    let user = await User.create({
        name: 'libin'
    })

    console.log('user:', user)

    logger.info('logger user:', user)

    let res = await User.findAll({
        where: {
            name: user.name
        }
    })

    ctx.body = res
})
router.post("/post", async (ctx: Koa.DefaultContext) => {
    logger.info('logger post:', ctx.request.body)

    ctx.body = ctx.request.body.shuJu
})

export default router