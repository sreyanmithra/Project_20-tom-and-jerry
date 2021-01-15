var ground

var tom,tom1Image,tom2Image,tom3Image,tom4Image

var jerry,jerry1Image,jerry2Image,jerry3Image,jerry4Image

function preload() {

    ground=loadImage("images/garden.png")

    tom1Image=loadAnimation("images/tomOne.png")
    tom2Image=loadAnimation("images/tomTwo.png")
    tom3Image=loadAnimation("images/tomThree.png")
    tom4Image=loadAnimation("images/tomFour.png")

    jerry1Image=loadAnimation("images/jerryOne.png")
    jerry2Image= loadAnimation("images/jerryTwo.png")
    jerry3Image=loadAnimation("images/jerryThree.png")
    jerry4Image=loadAnimation("images/jerryFour.png")

}

function setup(){

    createCanvas(800,600)

    tom=createSprite(700,500)
    tom.addAnimation("tom_sleeping",tom1Image)
    tom.scale=0.1

    jerry=createSprite(100,500)
    jerry.addAnimation("jerry_seeing",jerry4Image)
    jerry.scale=0.1

}

function draw() {

    background(ground)

    if(tom.x-jerry.x<(tom.width-jerry.width)/2)
    { 

        tom.addAnimation("tom_siting",tom4Image)
        tom.changeAnimation("tom_siting")
        tom.velocityX=0
        tom.scale=0.1
        tom.x=170
        
        jerry.addAnimation("jerry_happy",jerry3Image)
        jerry.changeAnimation("jerry_happy")
        jerry.scale=0.1
    }  

    drawSprites()

}


function keyPressed(){

    if(keyDown("left_arrow")){

        tom.addAnimation("tom_running",tom2Image)
        tom.changeAnimation("tom_running")
        tom.velocityX=-4

    }
}