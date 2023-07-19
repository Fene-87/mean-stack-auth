import express from "express";

const app = express();

app.use('/', (req, res) => {
    return res.send('Hello there user!')
})

app.listen(8800, () => {
   console.log('Connected to backend')
})