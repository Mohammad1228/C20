var movingrect,fixedrect;


function setup() {
  createCanvas(800,400);
   movingrect =createSprite(400, 200, 50, 50);
   movingrect.debug = true; 

   fixedrect = createSprite(300,200,30,20);
   fixedrect.debug = true;
}

function draw() {
  background(0);
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  


isTouching();




  drawSprites();
}

function isTouching(){

if(movingrect.x-fixedrect.x <=movingrect.width/2 + fixedrect.width/2 && 
  fixedrect.x-movingrect.x <=movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y-fixedrect.y <=movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y-movingrect.y <=movingrect.height/2 + fixedrect.height/2 ){

movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";
  
}
else{
  movingrect.shapeColor = "white";
  fixedrect.shapeColor = "white";

}



}