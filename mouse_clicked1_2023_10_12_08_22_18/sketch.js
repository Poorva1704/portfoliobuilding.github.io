var p=['50','100','150','200']
var q= ['55','75','100','120']
//var c=['pink','red','purple','violet'];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
}
function mouseClicked(){
  background(0);
  
  fill(235);
  noStroke();
  ellipse(random(p),random(q),50)
}