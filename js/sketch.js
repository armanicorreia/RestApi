
function setup() {
  noCanvas();
  loadJSON('/all', gotData);
  console.log('running');
}

function gotData() {
  console.log(courses);
}
