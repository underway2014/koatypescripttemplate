import {Sequelize} from 'sequelize-typescript'
import path from 'path'

const modelsPath = path.join(__dirname, '../models')

const sequelize = new Sequelize({
    database: SYSTEM_CONFIG.DB_DATABASE,
    dialect: 'mysql',
    username: SYSTEM_CONFIG.DB_USERNAME,
    password: SYSTEM_CONFIG.DB_PASSWORD,
    host: SYSTEM_CONFIG.DB_HOST,
    port: SYSTEM_CONFIG.DB_PORT,
    models: [modelsPath]
    // models: [User]
})

export default sequelize
