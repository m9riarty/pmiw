/*

Campos Salazar - 94790/7 (recursante)
comi 2
en este link de youtube va a estar el tp del año pasado hecho en processing: https://youtube.com/playlist?list=PL-SGzSxp4zxVFdPYZTwQGX9VmH08szTJ8&si=nKoWOIzeLVj6CTFr

*/

let img;
let tamMaximo = 16;
let numMarcos = 13;
let cuadroTamano = 25;
let paletaActual = 0;

function preload() {
  img = loadImage("./obra/iluog.jpg"); 
}

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(220);

  image(img, 0, 0, 400, 400);

  push();
  translate(400, 0);

  //uso unos 3 'controladores' para que mi ilusión funcione como deseo
  let enPaletaBN = paletaActual === 0;
  let mouseSobreIlusion = mouseDentroDeAreaIlusion();
  let efectoParpadeo = frameCount % 20 < 10; //esto afecta a la velocidad del cambio con el mouse hover

  //solo se activa si se cumplen las 3 condiciones
  let invertirColores = enPaletaBN && mouseSobreIlusion && efectoParpadeo;

 
  for (let m = 0; m < numMarcos; m++) {
    let tam = tamMaximo - m * 2;
    dibujarMarco(tam, m, invertirColores);
  }
  pop();
}

//selfexplained
function dibujarMarco(tam, indice, invertir) {
  // cálculo
  let offset = (16 - tam) / 2 * cuadroTamano;

  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      let esColorA = (i < tam / 2 && j < tam / 2) || (i >= tam / 2 && j >= tam / 2);

      if (indice % 2 === 1) {
        esColorA = !esColorA;
      }
      if (invertir) {
        esColorA = !esColorA;
      }

    //paletas de colores opuestos complementarios
      let c;
      if (paletaActual === 0) {
        c = esColorA ? "#FFFFFF" : "#000000"; // bn
      } else if (paletaActual === 1) {
        c = esColorA ? "#1E90FF" : "#FF7F11"; // azul naranja
      } else if (paletaActual === 2) {
        c = esColorA ? "#8A2BE2" : "#FFD700"; // violeta y amarillo
      } else if (paletaActual === 3) {
        c = esColorA ? "#FF69B4" : "#228B22"; // rosa y verde
      } else if (paletaActual === 4) {
        c = esColorA ? "#00CED1" : "#FF4500"; // Turquesa y Rojo
      }

      fill(c);
      rect(offset + i * cuadroTamano, offset + j * cuadroTamano, cuadroTamano, cuadroTamano);
      //offset centra, i y j vienen del for anidado, se multiplican por cuadroTamano estableciendo el ancho y largo del rect
    }
    
  }
}

function mouseDentroDeAreaIlusion() {
  return mouseX >= 400 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400;
}

function mouseClicked() {
  if (mouseDentroDeAreaIlusion()) {
    paletaActual = (paletaActual + 1) % 5;
  }
}
 
function keyPressed() {
  if (key === "r" || key === "R") {
    paletaActual = 0;
  }
}
