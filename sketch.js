var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   surface1 = createSprite(685, 565, 220, 44);
   surface1.shapeColor ="brown";
   surface2 = createSprite(455, 565, 220, 44);
   surface2.shapeColor = "blue";
   surface3 = createSprite(220, 565, 220, 44);
   surface3.shapeColor = "red";
   surface4 = createSprite(0.9, 565, 180, 44);
   surface4.shapeColor = "black";
    //create 4 different surfaces


   box = createSprite(random(20, 750));
   box.shapeColor = "white";
   box.velocityY = 9;
   box.velocityX = 9;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();
     box.bounceOff(edges); 
    // box.bounceOff(surface1);
     //box.bounceOff(surface2);
     //box.bounceOff(surface3);
     //box.bounceOff(surface4);
     

     if(surface1.isTouching(box) && box.bounceOff(surface1)){
         box.shapeColor = "brown";
     }

     if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red";
    }
     
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "blue";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "pink";
    }
     drawSprites();

    //add condition to check if box touching surface and make it box
   
}
