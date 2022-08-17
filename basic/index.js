const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yewonko:asdf1234@basic.mo4nkh6.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{ console.log("MongoDB connected...")} )
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`${port}번 포트로 접속하였습니다.`)
})