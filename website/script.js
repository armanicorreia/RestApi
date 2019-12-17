
var courses = [];
var search = [];

function course(crn, semester, credits, name, prof, day, time, type, temp, seat) {
  this.crn = crn;
  this.semester = semester;
  this.credits = credits;
  this.name = name;
  this.prof = prof;
  this.day = day;
  this.time = time;
  this.type = type;
  this.temp = temp;
  this.seat = seat;
}

function empty(){
  courses = [];
  search = [];
}
function reload(){
  window.location.reload();
}
function crnsearch(){


empty()
var key = document.getElementById('crn').value;
const request = new XMLHttpRequest();
request.open('GET' , 'http://localhost:3000/all');

//define callback
request.onload = function (){
const data = JSON.parse(request.responseText);
console.log(data);
 for (var i = 0; i < data.length; i++) {
   var crn = data[i].course.crn;
   var semester = data[i].course.semester;
   var credits = data[i].course.credits;
   var name = data[i].course.name;
   var prof = data[i].course.professor;
   var day = data[i].course.day;
   var time = data[i].course.time;
   var type = data[i].course.type;
   var temp = data[i].course.temp;
   var seat = data[i].course.seat;

   var temp = new course(crn, semester, credits, name, prof, day, time, type, temp, seat);
   courses.push(temp);
 }
 //search

if (document.getElementById('crn').value.length > 0) {
 var crn = document.getElementById('crn').value;
   for (var i = 0; i < courses.length; i++) {
     if (courses[i].crn.includes(crn)) {
       search.push(courses[i]);
     }
   }
 }

  if (document.getElementById('title').value.length > 0) {
  var title = document.getElementById('title').value;
  for (var i = 0; i < courses.length; i++) {
    if (courses[i].name.includes(title)) {
      search.push(courses[i]);
    }
  }
}

if (document.getElementById('profname').value.length > 0) {
var prof = document.getElementById('profname').value;
for (var i = 0; i < courses.length; i++) {
  if (courses[i].prof.includes(prof)) {
    search.push(courses[i]);
  }
}
}

if (document.getElementById('day').value.length > 0) {
var day = document.getElementById('day').value;
for (var i = 0; i < courses.length; i++) {
  if (courses[i].day.includes(day)) {
    search.push(courses[i]);
  }
}
}

if (document.getElementById('day').value.length > 0) {
var day = document.getElementById('day').value;
for (var i = 0; i < courses.length; i++) {
  if (courses[i].day.includes(day)) {
    search.push(courses[i]);
  }
}
}

if (document.getElementById('seat').value.length > 0) {
var seat = document.getElementById('seat').value;
for (var i = 0; i < courses.length; i++) {
  if (courses[i].seat > seat) {
    search.push(courses[i]);
  }
}
}
if (document.getElementById('type').value.length > 0) {
var type = document.getElementById('type').value;
for (var i = 0; i < courses.length; i++) {
  if (courses[i].type.includes(type)) {
    search.push(courses[i]);
  }
}
}

   console.log(temp);
console.log(courses);
for (var i = 0; i < search.length; i++) {
  var iDiv = document.createElement('div');
  iDiv.id = 'container'
  iDiv.className = 'Course-card';

//crn div
  var innerCrn = document.createElement('div');
  innerCrn.id = (search[i].crn + i)
    iDiv.appendChild(innerCrn);

  //name div
  var innerName = document.createElement('div');
    innerName.id = (search[i].name + i)
      iDiv.appendChild(innerName);
//semester div
  var innerSem = document.createElement('div');
    innerSem.id = (search[i].semester + i)
      iDiv.appendChild(innerSem);
  //professor div
   var innerProf = document.createElement('div');
      innerProf.id = (search[i].prof + i)
        iDiv.appendChild(innerProf);
  //day div
   var innerDay = document.createElement('div');
        innerDay.id = (search[i].day + i);
        iDiv.appendChild(innerDay);

    //time div
   var innerTime = document.createElement('div');
          innerTime.id = (search[i].time + i);
          iDiv.appendChild(innerTime);

  //time div
   var innerType = document.createElement('div');
        innerType.id = (search[i].type + i);
        iDiv.appendChild(innerType);
  //credits div
  var innerCredits = document.createElement('div');
     innerCredits.id = (search[i].credits + i);
     iDiv.appendChild(innerCredits);
  //seats div
     var innerSeat = document.createElement('div');
        innerSeat.id = (search[i].seat + i);
        iDiv.appendChild(innerSeat);
//code div
        var innerTemp = document.createElement('div');
           innerTemp.id = (search[i].temp + i);
           iDiv.appendChild(innerTemp);








  document.getElementsByTagName('body')[0].appendChild(iDiv);
}
for (var i = 0; i < courses.length; i++) {
  document.getElementById(search[i].crn + i).innerHTML= search[i].crn;
  document.getElementById(search[i].name + i).innerHTML= search[i].name;
  document.getElementById(search[i].semester + i).innerHTML= search[i].semester;
  document.getElementById(search[i].day + i).innerHTML= search[i].day;
  document.getElementById(search[i].time + i).innerHTML= search[i].time;
  document.getElementById(search[i].prof + i).innerHTML= search[i].prof;
  document.getElementById(search[i].type + i).innerHTML= search[i].type;
  document.getElementById(search[i].credits + i).innerHTML= "Credits: " + search[i].credits;
  document.getElementById(search[i].seat + i).innerHTML= "Seats available: " + search[i].seat;
  document.getElementById(search[i].temp + i).innerHTML= "CRN: " + search[i].temp;

}

}
request.send();
}

function titlesearch() {

var key = document.getElementById('title').value;
const request = new XMLHttpRequest();
request.open('GET' , 'http://localhost:3000/get/title/' + key);

//define callback
request.onload = function (){
const data = JSON.parse(request.responseText);

}
request.send();


}

function profsearch() {

var key = document.getElementById('profname').value;
const request = new XMLHttpRequest();
request.open('GET' , 'http://localhost:3000/get/prof/' + key);

//define callback
request.onload = function (){
const data = JSON.parse(request.responseText);

}
request.send();
}
