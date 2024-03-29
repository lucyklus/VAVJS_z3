require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.NODE_DOCKER_PORT || 8080;

const app = express()
const models = require('./models')

const cors = require('cors');
app.use(cors({ origin: true}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log('Server listening on port 8080')
})

require('./routes')(app)

/*app.get('*', (req, res) => res.status(200).send({
    message: 'Hello',
}))*/

module.exports = app;
