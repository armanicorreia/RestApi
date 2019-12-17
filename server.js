var fs=require('fs');
var data=fs.readFileSync('package.json', 'utf8');
var courses=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(courses);
var express=require('express');

var app=express();

var routes = require('./api/routes/routes');
routes(app);

var server=app.listen(3000,listening);

function listening(){
console.log("listening..");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
