const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8080

const app = express()
const models = require('./models')

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log('Server listening on port 8080')
})

require('./routes')(app)

app.get('*', (req, res) => res.status(200).send(
    {
        message: 'Welcome to the beginning of nothingness.',
    }
))

module.exports = app;
