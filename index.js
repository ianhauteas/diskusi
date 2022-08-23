const express = require('express')
const app = express()
const port = 3000
// const fs = require("fs")
// const path = require('path')
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/game',(req,res) => {
  res.send('mari masuk zoom teman2')
})
// app.get('/login',(req,res) => {
//   let database = fs.readFileSync("./database.json, utf-8")
//   res.send('gokil')
// })


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})