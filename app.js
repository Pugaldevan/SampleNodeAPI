const express =  require('express')
const app = express()
const morgan = require('morgan')

 //var obj = require("user")
var fs = require('fs');

app.use(morgan('combined')) // 'short'

app.get("/",(req, res) => {

    console.log("Connection root route")
    res.send("Sending log from the node server using nodemon")

})

app.get("/users",(req, res) => {

    const user1 = {"firstName" : "Pugal","lastName" : "Devan"}
    const user2 = {"firstName" : "Abilasha","lastName" : "Rithu"}
    res.json([user1,user2])

})

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname  + "/" + "JSON" + "/" + "user.json", 'utf8', function (err, data) {
       console.log( err );
       res.end( data );
    });
 })
 

/*
app.get("/userDetails",(req, res) => {

    // const user1 = {"firstName" : "Pugal","lastName" : "Devan"}
    // const user2 = {"firstName" : "Abilasha","lastName" : "Rithu"}
    res.json(obj)

})
*/

app.listen(2000, () => {
    console.log("Connceting to port 2000 .....")
})