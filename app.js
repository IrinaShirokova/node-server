const express = require('express')
const http = require('http')
const data = require('./src/data')
const app = express()

var httpServer = http.createServer(app);
httpServer.listen(8080);

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/person', (req, res) => {
    const person = data.person;

    res.header('Content-type', 'application/json');
    res.status(200).json(person).end();
})

app.get('/pug', (req, res) => {
    const forHtml = data.forHtml;

    res.header('Content-type', 'text/html');
    res.status(200).render('index', { title: forHtml.title, message: forHtml.message});
})

app.get('/html', (req, res) => {
    var html = `
    <html>
        <body>
            <form method="post" action="http://localhost:8080">Name: 
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>
        </body>
    </html>`;
    res.header('Content-type', 'text/html');
    res.send(html).end();
})