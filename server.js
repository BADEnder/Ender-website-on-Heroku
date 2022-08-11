const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.use('/api/article', require('./routes/api/article'))
app.use('/api/comment', require('./routes/api/comment'))


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if ( req.accepts('json')) {
        res.json({ error: "404 Not Found"})
    } else {
        res.type('txt').send('404 Not Found')
    }
  } )
  
  


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
