const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

router.get('/users', (req, res) => {
    res.send('GET request at /users');
});

router.get('/users/:id', (req, res) => {
    console.log(req.params, req.query);
})



router.get('/editor/init', (req, res) => {
    fs.readFile('./server/data/init.js', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    });
})

router.get('/editor/example', (req, res) => {
    fs.readFile('./server/data/example.js', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    });
})

module.exports = router;