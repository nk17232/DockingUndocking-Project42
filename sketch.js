var iss, spacecraft; 
var hasDocked=false;
var issImg, spacebgImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;


function preload(){
issImg=loadImage("iss.png");
spacebgImg=loadImage("spacebg.jpg");
spacecraft1Img=loadImage("spacecraft1.png");
spacecraft2Img=loadImage("spacecraft2.png");
spacecraft3Img=loadImage("spacecraft3.png");
spacecraft4Img=loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50,50);
  iss.addImage(issImg);
  iss.scale=0.85;
 
  spacecraft = createSprite(200, 300, 50, 50);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.20;
  
  spacecraft.x=Math.round(random(150,400));

  

}

function draw() {
  background(spacebgImg);  
   
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.velocityX=-2;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.velocityX=3;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img);
    }
    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2Img);
      spacecraft.velocityY=-2;
    }

  }
  console.log(spacecraft.x);

if  (spacecraft.x===Math.round(random(340,360))&& spacecraft.y===280){
spacecraft.velocityX=0;
hasDocked=true;
textSize(40);
fill("white");
text("Docking Successful!!", 400, 750);
}

drawSprites();
}
