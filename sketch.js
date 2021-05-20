var trackimage,track;
var car1image,car1
var car2image,car2
var score,opponentScore,gamestate


function preload(){
  trackimage=loadImage("images/trackimage.jpg")
  car1image=loadImage("images/car 1 bmw.png")
  car2image=loadImage("images/mascerrati2.png")



}
function setup() {

  createCanvas(2000,2000);

 track= createSprite(400, 200, 800, 400);track.addImage(trackimage);track.scale=1.5;
 car1=   createSprite(710,275,40,40);car1.addImage(car1image);car1.scale=0.6
 car2=    createSprite(723,143,40,40);car2.addImage(car2image);car2.scale=0.6
 score=   0
 opponentScore=0
 gamestate="play"
}

function draw() {
  background(255,255,255); 
  if(gamestate=="play") {
  car2.x=car2.x-6;
  if(keyDown("UP_ARROW")) {
    car1.y=car1.y-10;
  }
    if(keyDown("DOWN_ARROW")) {
    car1.y=car1.y+10;

    }
    if(keyDown("RIGHT_ARROW")){
      car1.x=car1.x+10;
    }
  
    if(keyDown("LEFT_ARROW")){
      car1.x=car1.x-10;
    }
     

  if(car1.x<800){
   score=800-car1.x 


   
  }
  else{
    score=0
  }
 //car2
 if(car2.x<800){
 opponentScore=800-car2.x 


  
 }
 else{
   opponentScore=0
 }
 if(car1.x<72||car2.x<72){
 gamestate="end"

 }
  }



  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  fill("red")
  textSize(30)
    text("score="+score,409,46)
    text("score="+opponentScore,469,375)
    
    if(gamestate=="end")
    {if (car1.x<72)
    text ("you win",200,200)
    else
    text("youlost",200,200)
    
  
    }
}