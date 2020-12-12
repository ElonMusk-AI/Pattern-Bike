const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImage;

var bike;
var ground1, ground2;

function preload(){
    backgroundImage = loadImage("images/bachground/Desert.jpg");
}
function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(450,580,800,10,0);

    ground2 = new Ground(900,580,100,10,PI/2);

    bike = new Bike(600,200);


}
function draw(){ 
    background(backgroundImage);
    Engine.update(engine);

    ground1.display();

    ground2.display();

    bike.display();
}