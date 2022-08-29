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

module.exports = router;