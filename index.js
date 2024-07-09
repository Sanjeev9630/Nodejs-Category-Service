const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config();
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Welcome to code for express app')
})

app.use('/category', require('./router/category'))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})
