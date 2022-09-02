const express = require('express');
const logger = require('morgan')
const bodyParser = require("body-parser");
const indexRouter = require('./routes/index');
const fs = require('fs');

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는다
app.use(bodyParser.json());     // 'application/json' 방식의 Content-Type 데이터를 받아준다
app.use('/api', indexRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.send(err.message);
});

app.get('/', (req, res) => {
    return res.status(200).send({
        success: true
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.get("/editor")



app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
