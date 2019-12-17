'use strict';
var fs=require('fs');
var data=fs.readFileSync('package.json', 'utf8');
var courses=JSON.parse(data);
module.exports = function(app) {

  // Routes

//CRN lookup
app.get('/get/crnn/:word', showCrn);

function showCrn(req, res) {
  var word = req.params['word'];

  for (var i = 0; i < courses.length; i++) {
    var crn = courses[i].course.crn.stringify();
    if (crn.includes(word)) {
      var course = courses[i].course;
    }
  }
  res.send(course);

}

app.get('/get/crn/:word',function(req,res){
var course = courses.filter(function(val){
  return val.crn === req.params;
});
res.send(course);

 console.log("success");

});


//Title Lookup
app.get('/get/title/:word', showTitle);

function showTitle(req, res) {
  var word = req.params['word'];

  for (var i = 0; i < courses.length; i++) {
    if (courses[i].course.name === word) {
      var course = courses[i].course;
    }
  }
  res.send(course);

}

//instructer Lookup
app.get('/get/prof/:word', showOne);

function showOne(req, res) {
  var word = req.params['word'];

  for (var i = 0; i < courses.length; i++) {
    if (courses[i].course.professor === word) {
      var course = courses[i].course;
    }
  }
  res.send(course);

}

//day Lookup
app.get('/all',sendAll);
function sendAll(request,response){
  response.send(courses)
}

//time Lookup
app.get('/get/time/:key',function(req,res){
var course = courses.filter(function(val){
  return val.time === req.params.time;
});
res.send(course);

 console.log("success");

});

//type Lookup
app.get('/get/type/:key',function(req,res){
var course = courses.filter(function(val){
  return val.type === req.params.type;
});
res.send(course);

 console.log("success");

});
}
