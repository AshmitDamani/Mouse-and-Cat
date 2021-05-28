var bgImg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;

function preload() {
    bgImg     = loadImage("garden.png");
    catImg1   = loadAnimation("cat1.png");
    catImg2   = loadAnimation("cat2.png","cat3.png");
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry spriteds here
    mouse=createSprite(150,650);
    mouse.addAnimation("standing",mouseImg1);
    mouse.scale=0.15;
    cat=createSprite(800,670);
    cat.addAnimation("standing",catImg1);
    cat.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      
    mouse.x=150;
    cat.x=800;
    cat.changeAnimation("standing");
    mouse.changeAnimation("standing");    
    cat.velocityX=0;
    cat.scale=0.2;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
   
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;
cat.addAnimation("catWalking",catImg2);
cat.changeAnimation("catWalking");
cat.velocityX=-3;
cat.scale=0.3;
}

}
