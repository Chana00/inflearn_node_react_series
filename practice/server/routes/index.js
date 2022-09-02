const express = require('express');
const router = express.Router();


router.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

router.get('/users', (req, res) => {
    res.send('GET request at /users');
});

router.get('/users/:id', (req, res) => {
    console.log(req.params, req.query);
})



router.get('/run-example', (req, res) => {
    let title = req.query.title;
    let exJS = req.query.main;
    let initJS = req.query.init;
    let path = req.query.path;
    console.log(`title = ${title}`);

    res.send(
        title
    )
})

module.exports = router;