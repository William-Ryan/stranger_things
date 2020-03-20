const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const characterRouter = require('../characters/charactersRouter.js')
const db = require('../data/knex-config.js')

const server = express();

server.use(express.json())
server.use(helmet());
server.use(cors());

server.use('/api/chars', characterRouter)

server.get('/', (req, res) => {
    res.send(`<h1>It's working!</h1>`)
})

module.exports = server