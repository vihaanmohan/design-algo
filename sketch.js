var movingrect,fixedrect
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400,200,100,100);
  fixedrect=createSprite(300,200,100,100);
}

function draw() {
  background("blue"); 
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2)

    
  {
    movingrect.shapeColor="red"
    fixedrect.shapeColor="yellow"
  }
  else{
  movingrect.shapeColor="grey"
  fixedrect.shapeColor="grey"
  }
  
  drawSprites();
}