import {Sequelize} from 'sequelize-typescript'
import path from 'path'

const modelsPath = path.join(__dirname, '../models')

const sequelize = new Sequelize({
    database: 'koatest',
    dialect: 'mysql',
    port: 3306,
    username: 'root',
    password: 'root',
    models: [modelsPath]
    // models: [User]
})

export default sequelize
