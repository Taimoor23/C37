var dogImg, happyDog, database, foodS, foodStoke, readStock;
var dog

function preload()
{
  
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  foodStock = database.ref('Food');
  foodStock.on("value", readStoke);
}


function draw() { 
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  textSize(20);
  fill("red");
  stroke("white");
  text("Note: Press the up arrow to feed the dog milk", 60, 50);

  drawSprites();
}

function readStoke(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  });
}