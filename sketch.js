
var bg,character,mummy,monster,Vampire,ground;
var bgimg,characterimg,mummyimg,monsterimg,Vampireimg,groundimg;


function preload(){
bgimg=loadImage("images/bg.jpg");
characterimg=loadImage("images/character.png");
monsterimg=loadImage("images/monster.png");
mummyimg=loadImage("images/mummy.png");
Vampireimg=loadImage("images/Vampire.png");
groundimg=loadImage("images/ground.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg=createSprite(100,100,10,60);
bg.addImage(bgimg);
bg.scale=1;

monster=createSprite(50,70,10,10);
monster.addImage(monsterimg)
monster.scale=1;

mummy=createSprite(300,20,10,10);
mummy.addImage(mummyimg)
mummy.scale=1;

Vampire=createSprite(290,80,10,10);
Vampire.addImage(Vampireimg);
Vampire.scale=1;

ground=createSprite(380,70,18,19);
ground.addImage(groundimg);
ground.scale=1;

character=createSprite(469,30,19,19);
character.addImage(characterimg);
character.scale=1;
}
function draw(){
    drawSprites()
}