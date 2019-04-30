
function preload(){
}

function setup() {
  saveSetup()
  // createCanvas(1280, 720, WEBGL);
  createCanvas(1280, 720)
  textSize(16)
  stroke(255)
  fill(200)
}

function draw() {
  background(0)
  rect(frameCount,100,10, 10)
  text(frameCount,100,100)
  saveFrame(10)
}


// S押して連番書き出し =========================================
let saveFileName = ""
let saveStart = false
let startFrame = 0
function saveSetup(){
  var c = "abcdefghijklmnopqrstuvwxyz"
  var cl = c.length
  for(var i=0; i<4; i++){
    saveFileName += c[Math.floor(Math.random()*cl)]
  }
}
function saveFrame(duration){
  if(saveStart == true){
    if(frameCount<= startFrame + duration){
      save(saveFileName + '_' + ( '000' + (frameCount - startFrame) ).slice( -4 ) + '.png')
    }else{
			saveStart = false
		}
  }
}
function keyPressed(){
  if(saveStart == false){
		saveFileName=""
		saveSetup()
	}
  if(key == "s" || key == "S"){
    saveStart = true
    startFrame = frameCount
  }
}