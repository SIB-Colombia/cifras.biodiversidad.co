import express from 'express'
import React from 'react'
import App from '../dist/ssr/app'
import { StaticRouter } from 'react-router'
import reactDOMServer from 'react-dom/server'

const app = express();
app.use(express.static('dist'))
app.use('/images', express.static('static'))

app.get('*', (req, res) => {
    const html = reactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={{
                logged: true
            }}
        >
            <App />
        </StaticRouter>
    )
    res.write(`
        <!doctype html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Ventana Regional Santander</title>
            <!--<link rel="stylesheet" href="/css/app.css">-->
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="/js/app.js"></script>
            
        </body>
        </html>
    `)
    res.end()
})

app.listen(3000)
console.log('Running in port 3000')
