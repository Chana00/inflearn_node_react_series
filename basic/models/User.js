const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//값을 저장하기 이전에 실행되는 함수
//this 바인딩의 차이때문에 화살표함수 XX
userSchema.pre('save', function (next) {
    var user = this;    // 스키마 내부를 가리킨다

    //password가 변환될 때만 실행
    if (user.isModified('password')) {
        console.log("패스워드 변경 전처리 시작");
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err);

                //비밀번호 암호화를 성공했으면 변경 후 돌아간다
                user.password = hash;
                next();
            });
        });

    } else {
        next();
    }
});

userSchema.methods.comparePassword = function (plainPassword, callback) {
    //plainPW : 1234567   암호화된 PW : $2G1$0$l492vQ0M4...
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

//jwt를 이용해서 토큰생성
userSchema.methods.generateToken = function (callback) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), "anything");
    user.token = token;
    user.save(function (err, user) {
        if (err) return callback(err);
        callback(null, user);
    })
};

//토큰 찾아 일치확인
userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    //토큰을 decode 한다.
    jwt.verify(token, 'anything', function (err, decoded) {
        //유저 아이디를 이용해서 유저를 찾은 다음
        //클라이언트에서 가져온 tokeb과 DB에 보과노딘 토큰이 일치하는지 확인한다
        user.findOne({ "_id": decoded, "token": token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}


const User = mongoose.model('User', userSchema)

module.exports = { User }