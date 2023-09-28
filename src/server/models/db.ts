import mysql from 'mysql2'
import promise from 'mysql2/promise'
import { NextResponse } from 'next/server';



const host: any = process.env.DB_HOST
const port: any = process.env.DB_PORT
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

const pool = mysql.createPool({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
    // timezone: 'UTC',
    waitForConnections: true,
    // connectionLimit: 10,
    // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    multipleStatements: true,
    keepAliveInitialDelay: 0
})


async function poolExecute({ sql = '', additional = {} }: { sql: string, additional?: any }) {

    const promisePool = pool.promise();
    try {
        const [rows, fields] = await promisePool.execute(sql);

        return NextResponse.json({
            success: true,
            result: rows,
            ...additional
        })
    }
    catch (err) {
        return NextResponse.json({ success: false, result: [] })
    }
}

async function poolQuery({ sql = '', additional = {} }: { sql: string, additional?: any }) {
    const promisePool = pool.promise();
    try {
        const [rows, fields] = await promisePool.query(sql);

        return NextResponse.json({
            success: true,
            result: rows,
            ...additional
        })
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({ success: false, result: [] })
    }
}

const imagePort: any = process.env.IMAGE_DB_PORT
const image_upload_pool = mysql.createPool({
    host: process.env.IMAGE_DB_HOST,
    port: imagePort,
    user: process.env.IMAGE_DB_USER,
    password: process.env.IMAGE_DB_PASS,
    database: process.env.IMAGE_DB_NAME,
    // database: 'ahaliyasdeensquare',
    waitForConnections: true,
    // timezone: 'UTC',
    // connectionLimit: 10,
    // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    multipleStatements: true,
    keepAliveInitialDelay: 0
})

// async function connectExecute({ sql = '', res }) {
//     const promisePool = connection.promise();
//     try {
//         const [rows, fields] = await promisePool.execute(sql);
//         return res.send({
//             success: true,
//             result: rows
//         })
//     }
//     catch (err) {
//         return res.send({ success: false, result: [] })
//     }
// }


// connection.connect(function (err) {
//     if (err) {
//         console.log(err.message)
//     }
//     console.log('database connected')
// })

export {
    image_upload_pool,
    pool,
    poolExecute,
    poolQuery
}