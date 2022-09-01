const express = require('express');
const logger = require('morgan')
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;


const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는다
app.use(bodyParser.json());     // 'application/json' 방식의 Content-Type 데이터를 받아준다
app.get('/api/hello', (req, res) => {
    res.send({
        message: 'Hello, Express!'
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));