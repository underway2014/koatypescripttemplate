import logger from "../logger"

export default function initConfig() {
    const commonConfig = {
        PORT: 12000
    }
    
    const envConfig = {
        local: {
            NODE_ENV: 'local',
            DB_DATABASE: 'koatest',
            DB_HOST: '127.0.0.1',
            DB_PORT: 3306,
            DB_USERNAME: 'root',
            DB_PASSWORD: 'root'
        },
        test: {
            NODE_ENV: 'test',
            DB_DATABASE: 'koatest',
            DB_HOST: '127.0.0.1',
            DB_PORT: 3306,
            DB_USERNAME: 'root',
            DB_PASSWORD: 'root'
        },
        production: {
            NODE_ENV: 'production',
            DB_DATABASE: 'koatest',
            DB_HOST: '127.0.0.1',
            DB_PORT: 3306,
            DB_USERNAME: 'root',
            DB_PASSWORD: 'root'
        }
    }
    
    global.SYSTEM_CONFIG = {...envConfig[process.env.NODE_ENV as keyof typeof envConfig], ...commonConfig}
    logger.info('process.env.NODE_ENV = ', process.env.NODE_ENV)
    logger.info('SYSTEM_CONFIG = ', global.SYSTEM_CONFIG)
}
