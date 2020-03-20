const express = require('express');

const Chars = require('./charactersModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    Chars.find()
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error when retrieving' })
    })
})

module.exports = router