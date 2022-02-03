var Ball, database;
var position;


function setup(){
database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  var BallPosition =database.ref("Ball/Position");
  BallPosition.on("value",readPosition);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";


}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('Ball/Position').set({
    'X': position.X +x,
    'Y': position.Y +y
  });
}

function readPosition(data){
 position = data.val();
 Ball.x= position.X;
 Ball.y= position.Y;
}

function showError(){
  console.log("Error en la base de datos")
}
