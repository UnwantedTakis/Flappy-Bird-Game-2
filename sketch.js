
var gameState = "play"
var score = 0
function preload(){
  birdImg=loadImage("./assets/Bird.png")
  FlappybirdpipeImg=loadImage("./assets/Flappybirdpipe.png")
  Flappybirdpipe2Img=loadImage("./assets/Flappybirdpipe2.png")
  gameOverImg = loadImage("./assets/gameOver.png")
} 
 
function setup(){
createCanvas(500,300)
bird= createSprite(width/2,height/2)
bird.addImage ("bird",birdImg)
bird.scale=0.15
bird.debug = true
bird.setCollider("rectangle",0,0,50,50)
pipesGroup=new Group()



invisableGround=createSprite(width/2,height-20,width,20)
invisableGround.velocityX=2
invisableGround.visible=false
gameOver = createSprite(width/2-20,height/2-20)
gameOver.addImage(gameOverImg)
gameOver.visible = false
}

function draw() {
background("green")
if(gameState=="play"){


if(keyDown("space")){
bird.velocityY=-10
}
//if(ground.x<width/2){
  //ground.x = width/2-50
//}
bird.velocityY=bird.velocityY+0.5
bird.collide(invisableGround)
addObstacle()
if(bird.collide(pipesGroup)){
  console.log("gameover")
  gameState = "end"
}
addObstacle2()
}
if (gameState == "end"){
  bird.velocityY = 0
  gameOver.visible = true
  pipesGroup.setVelocityXEach(0)
}
drawSprites()
textSize(20)
text("score: "+score,width-150,20)

}

function addObstacle(){
  if(frameCount %100==0){
    var obstacle = createSprite(width,height-20,50,50)
    obstacle.velocityX=-2

    obstacle.addImage(FlappybirdpipeImg)

    obstacle.scale=0.2
    pipesGroup.add(obstacle)
    score = score+5
  }
}

function addObstacle2(){
  if(frameCount %100==0){
    var obstacle = createSprite(width+50,20,50,50)
    obstacle.velocityX=-2
    obstacle.addImage(Flappybirdpipe2Img)
    obstacle.scale=0.2
    pipesGroup.add(obstacle)
    score = score+5
  }
}