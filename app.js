const express =  require('express')
const app = express()
const morgan = require('morgan')
// For checking system logs, ie) which browser and showing the execution time.
app.use(morgan('combined')) // 'short'

// checking the logs in browser
app.get("/",(req, res) => {
    console.log("Connection root route")
    res.send("Sending log from the node server using nodemon")
})

// Load the json data
app.get("/users",(req, res) => {
    const user1 = {"firstName" : "Mark","lastName" : "Jack"}
    const user2 = {"firstName" : "Richie","lastName" : "Dave"}
    res.json([user1,user2])

})

// Load JSON file 
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname  + "/" + "JSON" + "/" + "user.json", 'utf8', function (err, data) {
       console.log( err );
       res.end( data );
    });
 })
 
// Checking the mac port
app.listen(2000, () => {
    console.log("Connceting to port 2000 .....")
})