var canvas;
var music;
var box;
var edge1,edge2,edge3,edge4;
var surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(700,580,180,20)
    surface1.shapeColor="blue"
    surface2 = createSprite(500,580,180,20)
    surface2.shapeColor="red"
    surface3 = createSprite(300,580,180,20)
    surface3.shapeColor="green"
    surface4 = createSprite(100,580,180,20)
    surface4.shapeColor="yellow"
    //create box sprite and give velocity
    box=createSprite(random(20,750))
    box.velocityY=2;
    box.scale=0.30;
    
    edge1=createSprite(799,300,5,600)
    edge2=createSprite(400,599,800,5)
    edge3=createSprite(400,1,800,5)
    edge4=createSprite(1,300,5,600)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
    box.bounceOff(edge1)
    box.bounceOff(edge2)
    box.bounceOff(edge3)
    box.bounceOff(edge4)
    

    //add condition to check if box touching surface and make it box


    if(box.isTouching(surface1)){
        box.shapeColor="blue";
        box.velocityY=0;
    }

    if(box.isTouching(surface2)){
        box.shapeColor="red";
        box.velocityY=0;
    }

    if(box.isTouching(surface3)){
        box.shapeColor="green";
        box.velocityY=0;
    }

    if(box.isTouching(surface4)){
        box.shapeColor="yellow";
        box.velocityY=0;
    }
    drawSprites()
}
