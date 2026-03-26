
let jonas;
let bholly;
let undone;
let say;
let mySound;

function preload(){
  jonas =loadSound('jonas.mp3');
  bholly = loadSound('bholly.mp3');
  say = loadSound('say.mp3');
  undone =loadSound('undone.mp3');
}


function setup() {
 jonas= loadSound("jonas.mp3");
  bholly = loadSound("bholly.mp3");
  say = loadSound("say.mp3");
  undone = loadSound("undone.mp3");
  
  createCanvas(430,400);
  


}
function draw() {
  background('#009BCE');
  
 if (mouseY <200){
   
   fill("black")
  text(" press band 4 tracklist",10,25)

 }
  if (mouseY>260){
    fill("black")
    text("click band to play + space bar to stop",10,25)
  }
 

 
  //Jonas
  //head
  
  push()
  noStroke()
  fill ("#73473d")
  square(50,230,20);
  
  noStroke()
  fill('black')
  square(70,230,20)
  fill('#eeb199')
  rect(50,250,40,40)
  //square(70,230,20)
 //square(50,250,20)
  
   //pants
  fill('black');
  rect(40,360,55,60)
  //shirt 1 
  fill('white')
   rect(27,270,80,90)
 
  //hands
  fill('#eeb199')
  square(27,350,20,)
  square(87,350,20)
  if (mouseX >27 && mouseX <107 && mouseY> 270 && mouseY<360){
    fill("black")
    textSize(50)
text("my name is jonas", 50,200);
}
 
  /*  if(mouseIsPressed=== true && mouseX<130){
      if (jonas.isPlaying()== false)
  jonas.play() 
      }
  */
      if(mouseIsPressed=== true && mouseX<130)
      {
      jonas.play()}
  //if (jonas.isPlaying()== false)
  if (keyIsPressed === true) {
    jonas.stop();
  }
      
      
      

      


pop()
  //BuddyHolly
  //hair
  push()
  noStroke()
  fill("black")
  rect(150,250,40,20)
  //face
  fill('#F7AF94')
  rect(150,270,40,20)
  //body
  fill("#304557")
  rect(130,290,80,80)
  //pants
  fill('#cc9675')
  square(140,370,60)
  //hands
  fill("#F7AF94")
  square(130,350,20)
  square(190,350,20)
    if (mouseX >130 && mouseX <211 && mouseY> 290 && mouseY<370){
    fill("green")
    textSize(50)
text("Buddy Holly", 10,200);
}
   if(mouseIsPressed=== true && mouseX>130 && mouseX<229){
  bholly.play()}
  if (keyIsPressed === true) {
    bholly.stop();  }
   if (keyIsPressed === true) {
    bholly.stop();}
    pop()
 //function mousePressed() {
  // (bholly.isPlaying()) 
  //  bholly.stop();}
  

 
  
//Undone-SweaterSong
  push()
  noStroke()
  fill('#6d4a47')
  rect(250,230,40,20)
fill('#f3aa7e')
  rect(250,250,40,20)
  
  //pants 
  fill("#21424c")
  square(240,350,60)
  //shirt
  fill("#f0b4ae")
  rect(230,270,80,90)
  fill("white")
  square(260,280,15)
  //hands 
  fill("#f3aa7e")
  square(250,340,20)
  square(265,340,20)
      if (mouseX >230 && mouseX <310 && mouseY> 280 && mouseY<360){
    fill("red")
    textSize(50)
text("Undone",60,80);
        text("Sweater Song",70,120)
}
  if(mouseIsPressed=== true && mouseX>230 && mouseX<329){
  undone.play()}
  if (keyIsPressed === true) {
    undone.stop();} 
  pop()
  
  //Sayitaintso
  //face
  push()
  noStroke()
  fill("#f5c59a")
  rect(350,255,40,20)
  //hair 
  fill("#110d0d")
  rect(350,235,40,20)
  //shirt 
  fill('#416483')
  rect(330,275,75,90)
  //pants
  fill("#272928")
  square(340,365,60)
  //hands
  fill("#f5c59a")
  rect(330,315,20,50)
  rect(388,315,20,50)
     if (mouseX >330 && mouseX <405 && mouseY> 275 && mouseY<350){
    fill("blue")
    textSize(50)
text("Say It Ain't So", 100,200);
}
  if(mouseIsPressed=== true && mouseX>329 && mouseX<420){
  say.play()}
  if (keyIsPressed === true) {
    say.stop();}  pop()
}