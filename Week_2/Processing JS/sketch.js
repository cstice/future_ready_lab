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
var backgroundColor;

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

function Rectangle(x,y,w,h,color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.width = w;
    this.height = h;
    this.color = color || randomColor();
    this.xSpeed = xSpeed || 18;
    this.ySpeed = ySpeed || 15;
}


function Triangle(x1, y1, x2, y2, color, xSpeed, ySpeed){
    this.x1Coor = x1;
    this.y1Coor =y1;
    this.x2Coor = x2;
    this.y2Coor = y2;
    this.x3coor = abs(x1 - x2);
    this.y3Coor = abs(y1 - y2);
    this.color = randomColor();
    this.xSpeed = xSpeed || 18;
    this.ySpeed = ySpeed || 15;
}
var shapeList = [];

function createShape(){

    var numShapes = random([2,5,9,16]);
    for (var i = 0; i < numShapes; i++){
        shapeList.push(new Shape(random(width),random(height),50));
        switch (random([1,2,3])){
            case 1:
                shapeList.push(new Circle(random(width),random(height), 50));
                break;
            case 2: 
                shapeList.push(new Rectangle(random(width), random(height), random(100), random(100)));
                break;
            case 3:
                shapeList.push(new Triangle(random(100),random(100), random(100), random(100)));
                break;
        }
    }
}


function setup(){
    backgroundColor = randomColor()
    createCanvas(parseInt(prompt("Enter canvas size width ")), parseInt(prompt("Enter canvas size length"))); //makes user put in canvas size 
    background(backgroundColor);
    frameRate(800);
    createCircles();
}



function draw(){
    background(backgroundColor);
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