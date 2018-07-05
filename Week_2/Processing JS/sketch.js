//define a circle object
/*var circle = {
    diameter:80,
    xCoor:0,
    yCoor:0,
    color:[255,0,0], //gives circle a reb color, RGB values give circle red color
    xSpeed: 5,
    ySpeed: 5
}
*/

function randomColor(){
    return [random(256), random(256), random(256)];
    
}

function Circle(x,y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color || [0,0,0]; //makes default color black
    this.xSpeed = xSpeed || 18;
    this.ySpeed = ySpeed || 15;
}

var circleList = [];

function createCircles(){
    var numCircles = random([2,5,9,16]);
    for (var i = 0; i < numCircles; i++){
        circleList.push(new Circle(random(width),random(height), 50));
    }
}

function setup(){
    createCanvas(parseInt(prompt("Enter canvas size width ")), parseInt(prompt("Enter canvas size length"))); //makes user put in canvas size 
    background(210,255,46);
    frameRate(800);
    createCircles();
}



function draw(){
    clear();
    for(var i = 0; i<circleList.length; i++){
        fill(circleList[i].color);
    ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
    
    
    if(circleList[i].xCoor >=width){
        circleList[i].color = randomColor();//makes circle random color
        circleList[i].xSpeed = -circleList[i].xSpeed;//reverse direction
        circleList[i].diameter = random(20,100);//makes circle random size
    }else if(circleList[i].xCoor<0){
        circleList[i].color = randomColor();//makes circle blue
        circleList[i].xSpeed = -circleList[i].xSpeed;
        circleList[i].diameter = random(20,100);//makes circle random size
    }
    
    
    //changes y and makes it bounce diagonally
    if(circleList[i].yCoor >=height){ //tells computer where the edge is than what to do when the circle hits the edge
        circleList[i].color = randomColor();//makes circle change to random color
        circleList[i].ySpeed = -circleList[i].ySpeed;//changes y speed and makes circle's y position change
        circleList[i].diameter = random(20,100);//makes circle random size
    }else if(circleList[i].yCoor<0){
        circleList[i].color = randomColor();//makes circle change to random color
        circleList[i].ySpeed = -circleList[i].ySpeed;
        circleList[i].diameter = random(20,100);//makes circle random size
    }
    
    circleList[i].xCoor+= circleList[i].xSpeed;
    circleList[i].yCoor+= circleList[i].ySpeed;

    }
    
 }   