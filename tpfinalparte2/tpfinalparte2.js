/*
  campos salazar florencia - 94790/7
  yamila fernandez
  
  LINK VIDEOS DEFENSA: https://www.youtube.com/playlist?list=PL-SGzSxp4zxVFdPYZTwQGX9VmH08szTJ8
  
  videojuego poo - gravity falls  
  idea: dipper yendo a investigar la luz proveniente del bosque, enfrentándose con diferentes obstáculos del bosque (naturaleza) en el camino
  mecánica: saltar y/o agacharse para no colisionar con los obstáculos
  pierde si: colisiona reiteradas veces y no llega al final en el tiempo indicado
  gana si: llega al final en el plazo de tiempo

*/

let objJuego;
//let fondoImg = [];
let estado = 0;

function preload() {
//  fondoImg [0] = loadImage(".jpg");
}   

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(); 
}


function draw() {
  noCursor();
  objJuego.dibujar();
}


function keyPressed(){
  if (estado === 0 && keyCode === ENTER){
  estado = 1;
}

  objJuego.teclaPresionada(keyCode); 
}

function mousePressed(){
  if (estado == 4 || estado == 5){
    objJuego.reinicioJuego();
    estado = 0;
  }
}
