/**
 * server.js
 * server 가동 명령어 :  node mongodb-server.js
 */

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));    //bodyParser 셋팅
app.use(bodyParser.json());     //bodyParser 셋팅

// =========== [ mongoose 세팅 ] ===============
// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost/mongodb_tutorial');


var Book = require('./models/book');    // 모델 정의
var router = require('./routes/route')(app, Book);  //라우터에 Book모델 전달

// =========== [RUN SERVER] ===============
var port = process.env.PORT || 8080;
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
