const express = require('express')
const bodyParser = require('body-parser')
const port = 8080

const app = express()
const models = require('./models')

const cors = require('cors');
app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log('Server listening on port 8080')
})

require('./routes')(app)

app.get('*', (req, res) => res.status(200).send(
    {
        message: 'Hello',
    }
))

module.exports = app;
