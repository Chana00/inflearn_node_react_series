const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");

//application/x-www/form-urlencoded 데이터를 분석해서 가져올 수 있게 도와준다
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// application/json 데이터를 분석해서 가져올 수 있게 도와준다
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, { dbName: 'node-react-basic' })
  .then(() => { console.log("MongoDB connected...") })
  .catch(err => console.log(err))


app.get('/api/hello', (req, res) => {
  res.send('Hello world! 안녕하세요 get 접속입니다~')
})

app.post('/api/register', (req, res) => {
  //회원 가입에 필요한 정보들을 받으면 DB에 저장한다
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

//요청된 이메일을 DB에서 있는지 찾고
//DB에 있다면 비밀번호가 맞는지 확인
//비밀번호까지 맞다면 토큰 생성
app.post('/api/users/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    //이메일이 DB에 없다면
    if (!user) {
      return res.json({
        localSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }


    //이메일이 있다면 비밀번호 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      console.log("여기까지 진입");
      if (!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

      //비밀번호가 맞다면 토큰생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //토큰 저장할 장소 ( 로컬스토리지 or 쿠키 등 ), 여기는 쿠키
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

//role 0 : 일반유저 / role이 0이 아니면 관리자
app.get('/api/users/auth', auth, (req, res) => {
  //Auth = true 이후
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name
  })


})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id },
    { token: "" },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
    })

})


app.listen(port, () => {
  console.log(`${port}번 포트로 접속하였습니다.`)
})