//define a circle object
var circle = {
    diameter:80,
    xCoor:0,
    yCoor:0,
    color:[255,0,0], //gives circle a reb color, RGB values give circle red color
    xSpeed: 5,
    ySpeed: 5
}

function randomColor(){
    return [random(256), random(256), random(256)];
    
}

function setup(){
    createCanvas(640,480);
    background(210,255,46);
    frameRate(80);
}

function draw(){
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    
    if(circle.xCoor >=640){
        circle.color = randomColor();//makes circle random color
        circle.xSpeed = -circle.xSpeed;//reverse direction
        circle.diameter = random(20,100);//makes circle random size
    }else if(circle.xCoor<0){
        circle.color = randomColor();//makes circle blue
        circle.xSpeed = -circle.xSpeed;
        circle.diameter = random(20,100);//makes circle random size
    }
    
    
    //changes y and makes it bounce diagonally
    if(circle.yCoor >=480){
        circle.color = randomColor();//makes circle change to random color
        circle.ySpeed = -circle.ySpeed;//changes y speed and makes circle's y position change
        circle.diameter = random(20,100);//makes circle random size
    }else if(circle.yCoor<0){
        circle.color = randomColor();//makes circle change to random color
        circle.ySpeed = -circle.ySpeed;
        circle.diameter = random(20,100);//makes circle random size
    }
    
    circle.xCoor+= circle.xSpeed;
    circle.yCoor+= circle.ySpeed;
}