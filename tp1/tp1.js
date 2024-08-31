/*
  campos salazar florencia (94790/7) - COM 5
  
  LINK YOUTUBE: https://www.youtube.com/playlist?list=PL-SGzSxp4zxUoAHS7H8SP1e7dd8Tal8MM
  
*/

let tamMaximo = 16;
let numMarcos = 8;
let cuadroTamano = 25;
let trampita = 400; // para dibujarla a un costado
let flash = 0.3; // (velocidad)
let pines = true; // gf refe - var booleana
let cipher; // var de la imagen

function preload() {
  cipher = loadImage("data/stresso.jpeg"); 
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  if (pines) {
    background(0); 
    image(cipher, 0, 0, width / 2, height);
    
    let invertirColores = reverseF ();
    
    for (let marco = 0; marco < numMarcos; marco++) {
      let tamActual = tamMaximo - (marco * 2); 
      dibujarMarco(tamActual, cuadroTamano, marco, invertirColores);
    }
  }
}

function dibujarMarco(tam, cuadroTamano, indiceMarco, invertirColores) {
  let cuentita = (16 - tam) / 2 * cuadroTamano; // cuentita para centrar los marcos
  
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      let esBlanco = (i < tam / 2 && j < tam / 2) || (i >= tam / 2 && j >= tam / 2);
      if (indiceMarco % 2 === 0) {
        esBlanco = !esBlanco;
      }
      if (invertirColores) {
        esBlanco = !esBlanco;
      }
      
      fill(esBlanco ? 255 : 0);
      noStroke();
      rect(trampita + cuentita + i * cuadroTamano, cuentita + j * cuadroTamano, cuadroTamano, cuadroTamano);
    }
  }
}

function reverseF () {
  let invertir = false;
  
  if (mouseX >= 400 && mouseX <= 800) {
    let velocidad = map(mouseX, 400, 800, 0, 1) * flash;
    if (random(1) < velocidad) {
      invertir = true; 
    }
  } 
  
  return invertir;
}

function keyPressed() {
  pines = !pines; // detener y/o reiniciar el dibujo
}
