/* TP FINAL PT 1 - campos salazar 94790/7 y fernandez yamila (...)
  SERIE ANIMADA ELEGIDA: Gravity Falls

  trabajo dividido en dos partes para una mejor organización: estructura, flujo de pantallas y botones; imágenes, sonido y texto. 
  
  LINK AL VIDEO: https://youtube.com/playlist?list=PL-SGzSxp4zxVFdPYZTwQGX9VmH08szTJ8&si=zpn6jX5mxQ7WIGQE (playlist donde subimos la defensa del tp) 
*/

let narrativa = [];
let estado = 0;
let ancho = 640;
let alto = 480;

let decisionesA = [];
let decisionesB = [];

function preload() {
  // Carga solo los textos del 0 al 9
  for (let i = 0; i <= 9; i++) {
    narrativa[i] = loadStrings("assets/texto" + i + ".txt");
  }

  // ejemplo de decisiones (podés ir agregando)
  decisionesA[2] = "Investigar la luz";
  decisionesB[2] = "Seguir durmiendo";
  // podés seguir así:
  // decisionesA[5] = "Entrar a la cabaña";
  // decisionesB[5] = "Seguir el camino";
}

function setup() {
  createCanvas(ancho, alto);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(20);

  if (estado === 0) {
    mostrarPantalla(0, "COMENZAR", "CRÉDITOS");
  } else if (estado === 9) {
    mostrarFinal();
  } else if (estado === 10) {
    mostrarCreditos();
  } else if (decisionesA[estado] && decisionesB[estado]) {
    mostrarDecision(decisionesA[estado], decisionesB[estado]);
  } else {
    mostrarPantalla(estado, "SIGUIENTE");
  }
}

function mousePressed() {
  // Menú principal
  if (estado === 0 && dentroBoton(340, 300, 140, 50)) estado = 1;
  else if (estado === 0 && dentroBoton(160, 300, 140, 50)) estado = 10;

  // Créditos volver
  else if (estado === 10 && dentroBoton(250, 420, 140, 40)) estado = 0;

  // Avanzar
  else if (dentroBoton(540, 440, 80, 30)) {
    estado++;
    if (estado > 9) estado = 9; // evita errores
  }

  // Ejemplo: decisiones (editables)
  // if (estado === 2 && dentroBoton(100, 420, 120, 40)) estado = 3; // opción A
  // else if (estado === 2 && dentroBoton(400, 420, 120, 40)) estado = 4; // opción B
}

function mostrarPantalla(num, textoBtnA, textoBtnB) {
  mostrarTexto(num);
  if (textoBtnB) {
    dibujaBoton(160, 300, 140, 50, textoBtnB);
    dibujaBoton(340, 300, 140, 50, textoBtnA);
  } else {
    dibujaBoton(540, 440, 80, 30, textoBtnA);
  }
}

function mostrarDecision(opcionIzq, opcionDer) {
  mostrarTexto(estado);
  dibujaBoton(100, 420, 120, 40, opcionIzq);
  dibujaBoton(400, 420, 120, 40, opcionDer);
}

function mostrarFinal() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("El bosque se quiebra y siento su risa dentro de mí.\n(FINAL MALO)", width / 2, height / 2);
  textSize(14);
  text("SIGUIENTE >", width / 2, height / 2 + 60);
  textAlign(LEFT);
}

function mostrarCreditos() {
  background(10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Créditos\nAventura gráfica - Proyecto conjunto", width / 2, height / 2);
  dibujaBoton(250, 420, 140, 40, "VOLVER");
  textAlign(LEFT);
}

function dentroBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function dibujaBoton(x, y, w, h, texto) {
  let hover = dentroBoton(x, y, w, h);
  fill(hover ? 80 : 40);
  stroke(hover ? 255 : 200);
  strokeWeight(1);
  rect(x, y, w, h, 10);
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  textAlign(LEFT);
}

function mostrarTexto(num) {
  fill(0, 180);
  noStroke();
  rect(20, 150, 600, 100, 12);
  fill(255);
  textSize(16);
  text(narrativa[num], 40, 150, 560, 80);
}
