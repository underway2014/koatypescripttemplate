import Koa from 'koa'
import koaBody from 'koa-body'

import initConfig from './config'
initConfig()

import router from './router'
import sequelize from './db/mysql'
import genLoggerMd from './middlewares/loggerMd'
import xResponseTime from './middlewares/x-response-time'

const app: Koa = new Koa()

app.use(genLoggerMd())
app.use(xResponseTime)
app.use(koaBody())

app.use(router.routes())
sequelize.sync()
app.listen(SYSTEM_CONFIG.PORT, () => {
    console.log(`listening on localhost:${SYSTEM_CONFIG.PORT}`)
})