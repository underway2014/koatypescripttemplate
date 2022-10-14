// declare global {
//     var SYSTEM_CONFIG: CONFIGTYPE;
// }

// interface CONFIGTYPE {
//     PORT: number;
//     DB_HOST: string;
//     DB_PORT: number;
//     DB_USERNAME: string;
//     DB_PASSWORD: string;
//     DB_DATABASE: string;
// }

declare namespace SYSTEM_CONFIG {
    let NODE_ENV: string;
    let PORT: number;
    let DB_HOST: string;
    let DB_PORT: number;
    let DB_USERNAME: string;
    let DB_PASSWORD: string;
    let DB_DATABASE: string;
        
}

// export {}