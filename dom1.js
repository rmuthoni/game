var rSlider, gSlider, bSlider

function setup() {
createCanvas(710,400);
noStroke();

rSlider=createSlider(0, 255, 100);
rSlider.position(20,20);
gSlider=createSlider(0, 255, 0);
gSlider.position(20,50);
bSlider=createSlider(0, 255, 55);
bSlider.position(20,80);
}

function draw(){
var r=rSlider.value();
var g=gSlider.value();
var b=bSlider.value();
background (r,g,b);
text("red",165,35);
text("green",165,65);
text("blue",165,95);
text(r,550,165);
text(g,550,185);
text(b,550,300);
}
function key pressed
