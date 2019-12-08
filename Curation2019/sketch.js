// !!Other variables
var img;
var txt;
var circle;
var canvas;
//var map;
var bg;
var openEyes;

// !!sound variables
var music;


// !!Variable names for places of interest
var plex;
var iPod;
var zamona;
var pokemon;
var acm;
var container;

var iconAcm;
var iconPlex;
var iconIpod;
var iconContainer;
var iconPokemon;
var iconZamona;

function preload() {
    soundFormats('ogg');
    //load background
    bgimg = loadImage("assets/diagram.jpg");
    eyes = loadImage("assets/eyesOpen.png");
    myMusic = loadSound("assets/SurCapTune.ogg");

    //images are loaded in INDEX.html!!
    //preloaded Icons
    iconAcm = loadImage("assets/acmIcon.png");
    iconPlex = loadImage("assets/plexIcon.png");
    iconIpod = loadImage("assets/iPodIcon.png");
    iconPokemon = loadImage("assets/pokemonIcon.png");
    iconContainer = loadImage("assets/containerIcon.png");
    iconZamona = loadImage("assets/zamonaIcon.png");


    //Circle constructs
    plex = new Circle();
    iPod = new Circle();
    container = new Circle();
    acm = new Circle();
    pokemon = new Circle();
    zamona = new Circle();
}

// SETUP //
function setup() {
    canvas = createCanvas(1100, 1500);
    canvas.position(0, 0);
    myMusic.setVolume(0.6);
    myMusic.play();

}

// !!OBJECT CONSTRUCTOR!! //
function Circle() {
    //stroke weight variable
    this.w = 1;
    //color variables
    this.r = 150;
    this.b = 150;
    this.g = 150;
    this.t = 255;

    //display circle
    this.display = function (cirX, cirY, icon) {
        //position of circle-marker (specified in each consructor function)
        this.cirX = cirX;
        this.cirY = cirY;
        this.icon = icon;
        image(this.icon, this.cirX - 20, this.cirY - 20);

        push();
        fill(this.r, this.g, this.b, this.t);
        strokeWeight(0);
        stroke(this.r, this.g, this.b, 175);
        ellipse(this.cirX, this.cirY, 50, 50);
        pop();
    }
    //Interactions with circles - hover mouse, sound etc.
    this.interact = function (txtImg) {
        this.txtImg = txtImg;
        //this.song = song;
        this.d = dist(mouseX, mouseY, this.cirX, this.cirY);
        //this.song.setVolume(0.2);

        if (this.d < 30) {
            this.g = 50;
            this.b = 50;
            this.t = 20;
            image(eyes, 1, 0);
            document.getElementById(txtImg).style.display = "inline";


        } else {
            this.r = 150;
            this.b = 150;
            this.g = 150;
            this.t = 255;
            document.getElementById(txtImg).style.display = "none";

        }
    }

}

// DRAW //
function draw() {

    image(bgimg, 0, 0);

    //Displays of Interactive area = xMateriality50-1080, yPrivacy20-850
    plex.display(650, 70, iconPlex);
    iPod.display(550, 600, iconIpod);
    container.display(1000, 750, iconContainer);
    acm.display(90, 120, iconAcm);
    pokemon.display(600, 150, iconPokemon);
    zamona.display(700, 50, iconZamona);

    //Interactions with Objects
    plex.interact("txtPlex");
    iPod.interact("txtiPod");
    container.interact("txtContainer");
    acm.interact("txtAcm");
    pokemon.interact("txtPokemon");
    zamona.interact("txtZamona");

}
