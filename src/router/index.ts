import Koa from 'koa'
import Router from "koa-router"

import User from '../models/user'
import logger from '../logger'

const router: Router = new Router()

router.get("/", async (ctx: Koa.DefaultContext) => {
 
    let user = await User.create({
        name: 'libin'
    })

    logger.info('logger user:', user)
    logger.info('node env:', process.env.NODE_ENV, SYSTEM_CONFIG)

    let res = await User.findAll({
        where: {
            name: user.name
        }
    })

    ctx.body = res
})

router.post("/post", async (ctx: Koa.DefaultContext) => {
    try {
      logger.info('logger post:', ctx.request.body)
        ctx.body = ctx.request.body.shuJu
    }catch(err) {
        logger.error(err)
    }
})

export default router