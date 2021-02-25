const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
    engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(backgroundImg);

}

