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



router.get('/editor', (req, res) => {
    let title = req.query.title;
    let exJS = req.query.main;
    let initJS = req.query.init;
    let context;
    fs.readFile('./server/data/init.js', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        context = data;
        res.send(context);
    });
})

module.exports = router;