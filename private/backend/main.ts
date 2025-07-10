import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

const pages   = path.join( __dirname, '../frontend/pages' )
const scripts = path.join( __dirname, '../frontend/scripts' )

app.use( express.json() )
app.use( '/pages', express.static(pages) )
app.use( '/scripts', express.static(scripts) )

app.get('/', (req, res) => res.sendFile( path.join( pages, 'index.html') ))


const port = Number(process.env.PORT!)
const host = process.env.HOST!

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
})

