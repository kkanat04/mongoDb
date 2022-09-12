const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())
  .use(express.json())
  .use('/', require('./routes/index'))

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.f7rtsic.mongodb.net/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connect db is success');
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

start()