//*REQUIRES------------------------------------------------------------------------------------------
const express = require('express');
const session = require( 'express-session' );
const {UserRouter} = require('./server/routes/usersRouter');
const {PollRouter} = require('./server/routes/pollsRouter');
const path = require('path');
var cors = require('cors')

//*APP------------------------------------------------------------------------------------------
const app = express();
app.use(cors())
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 } 
    // You can select the time for your session 
}));
app.use(express.static(path.join(__dirname, "/public/dist/public")))

//*DATABASE------------------------------------------------------------------------------------------
require("./server/config/database.js");

//*ROUTES------------------------------------------------------------------------------------------
app.use( '/users', UserRouter );
app.use( '/polls', PollRouter );

app.all('*', function (req,res) {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})

//*PORT------------------------------------------------------------------------------------------
let port = 8080
app.listen(port, function(){
    console.log("Hi alfredo welcome to my exam");
    console.log("For this exam I have some important annotations");
    console.log("They are in to EXTRAS folder, hope you see them");
    console.log("Thanks so much!");
    console.log("This server is working on port: 8080");
})