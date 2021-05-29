var bg_img,tile_img,ball_img;
var tile,ball;

var tileGroup;

function preload(){
bg_img = loadImage("images/BG 4.jpg");
tile_img = loadImage("images/TILE.png");
ball_img = loadImage("images/BALL.png");
}

function setup(){
    createCanvas(500,700);

    tileGroup = new Group();

}

function draw(){
    background(bg_img);

    drawTile();

    drawSprites();
}


function drawTile(){
    if(frameCount%70 == 0){
        tile = createSprite(250,320);
        tile.addImage("tile_image",tile_img);
        tile.scale = 0.1;
        tile.x = random(220,280);
        tile.velocityY = 1;
        tileGroup.add(tile);
        
    }

    for(var i = 0;i<tileGroup.length; i++){

        for(var j = 340; j<680; j = j+5){
            if(tileGroup.get(i).y>= j){
                tileGroup.get(i).scale = 0.1+(j-335)/1000;
               
            }

            if(tileGroup.get(i).x<240){
                tileGroup.get(i).x-= 0.003;
            }

            if(tileGroup.get(i).x>240){
                tileGroup.get(i).x+= 0.003;
            }
        }

    }
    
}
