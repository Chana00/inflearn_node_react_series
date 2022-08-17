const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require("./models/User");

//application/x-www/form-urlencoded 데이터를 분석해서 가져올 수 있게 도와준다
app.use(bodyParser.urlencoded({extended : true}));

// application/json 데이터를 분석해서 가져올 수 있게 도와준다
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {dbName:'node-react-basic'})
.then(() =>{ console.log("MongoDB connected...")} )
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello world! 안녕하세요 get 접속입니다~')
})

app.post('/register', (req, res) => {
  const user = new User(req.body);
user.save((err, uesrInfo) => {
  if(err) return res.json({ success: false, err });

  console.log("회원가입 POST 완료");
  return res.status(200).json({
    success: true
  });
});
})

app.listen(port, () => {
  console.log(`${port}번 포트로 접속하였습니다.`)
})