/* TP FINAL PT 1 - campos salazar 94790/7 y fernandez yamila (...)
  SERIE ANIMADA ELEGIDA: Gravity Falls
  LINK AVENTURA GRÁFICA: https://www.canva.com/design/DAGzzAZVqh0/0LqYn7NOViFkjwPPghhKvw/edit
  (quisimos subirla como .jpg pero no se apreciaban las letras de nuestro árbol, por lo que agregamos un .pdf de la guía en texto)
  LINK VIDEO-DEFENSA: https://www.youtube.com/watch?v=MXUvjQVci08
  trabajo dividido en dos partes para una mejor organización: estructura, flujo de pantallas y botones; imágenes, sonido y texto. 
  
*/

let narrativa = [];
let estado = 0;
let ancho = 640;
let alto = 480;

// decisiones y transiciones
let decisionesA = [];
let decisionesB = [];

// variables narrativas y seguimiento
let mabelAcompaña = false;
let tocoPiedra = false;
let finalMalo = false;
let finalNeutro = false;
let finalBueno = false;

let llegoATexto5 = false;
let llegoATexto8 = false;
let tomoDecisionL = false;
let llegoATexto10 = false;

const ESTADO_CREDITOS = 99;

function preload() {
  for (let i = 0; i <= 28; i++) {
    narrativa[i] = loadStrings("assets/texto" + i + ".txt");
  }

  decisionesA[0] = "Comenzar";
  decisionesB[0] = "Créditos";

  decisionesA[1] = "Investigar la luz";
  decisionesB[1] = "Volver a dormir";

  decisionesA[2] = "Tocar la piedra";
  decisionesB[2] = "Verificar los símbolos";

  decisionesA[3] = "Correr hacia el bosque";
  decisionesB[3] = "Despertar a Mabel";

  decisionesA[4] = "Contarle los indicios";
  decisionesB[4] = "Contarle sobre la luz";

  decisionesA[5] = "Intentar de nuevo";
  decisionesB[5] = "Irse solo";

  decisionesA[8] = "Tocar con cuidado";
  decisionesB[8] = "Volver a casa";

  decisionesA[12] = "Hablarle a “Ford”";
  decisionesB[12] = "Esconderse y observar";
}

function setup() {
  createCanvas(ancho, alto);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(20);

  if (estado === ESTADO_CREDITOS) {
    pantCreditos();
    return;
  }

  if (finalMalo || finalNeutro || finalBueno) {
    pantFinal();
    return;
  }

  if (decisionesA[estado] && decisionesB[estado]) {
    pantDecisiones(decisionesA[estado], decisionesB[estado]);
  } else {
    pantalla(estado, "SIGUIENTE");
  }
}

function mousePressed() {
  let clickA = limiteBoton(100, 420, 120, 40);
  let clickB = limiteBoton(400, 420, 120, 40);
  let clickSig = limiteBoton(540, 440, 80, 30);

  if (decisionesA[estado] && clickA) seleccionar("A");
  else if (decisionesB[estado] && clickB) seleccionar("B");
  else if (!decisionesA[estado] && !decisionesB[estado] && clickSig) siguienteTexto();

  if ((finalMalo || finalNeutro || finalBueno || estado === ESTADO_CREDITOS) && clickSig) {
    resetJuego();
  }
}

function siguienteTexto() {
  if (estado === 5) { estado = 10; llegoATexto10 = true; return; }
  if (estado === 6) { estado = 7; return; }
  if (estado === 7) { estado = 12; return; }
  if (estado === 8) { estado = 11; return; }
  if (estado === 9) { estado = 10; llegoATexto10 = true; return; }
  if (estado === 10) { estado = 11; return; }
  if (estado === 11) { estado = 12; return; }
  if (estado === 12) { estado = 13; return; }

  if (estado === 13) {
    if (!llegoATexto10) estado = 24;
    else estado = 25;
    return;
  }

  if (estado === 14) {
    if (!llegoATexto10) estado = 22;
    else estado = 15;
    return;
  }

  if (estado === 22) { estado = 23; return; }
  if (estado === 23) { estado = 24; finalMalo = true; return; }

  if (estado === 25) { estado = 26; return; }
  if (estado === 26) { estado = 27; return; }
  if (estado === 27) { estado = 28; finalNeutro = true; return; }

  if (estado === 15) { estado = 16; return; }
  if (estado === 16) { estado = 20; return; }
  if (estado === 20) { estado = 21; finalBueno = true; return; }

  estado++;
}

function seleccionar(opcion) {
  if (estado === 0 && opcion === "A") { estado = 1; return; }
  if (estado === 0 && opcion === "B") { estado = ESTADO_CREDITOS; return; }

  if (estado === 1 && opcion === "A") { estado = 2; return; }
  if (estado === 1 && opcion === "B") { estado = 3; return; }

  if (estado === 2 && opcion === "A") { tocoPiedra = true; estado = 12; return; }
  if (estado === 2 && opcion === "B") { estado = 8; return; }

  if (estado === 3 && opcion === "A") { estado = 2; return; }
  if (estado === 3 && opcion === "B") { estado = 4; return; }

  if (estado === 4 && opcion === "A") { mabelAcompaña = true; estado = 9; return; }
  if (estado === 4 && opcion === "B") { estado = 5; return; }

  if (estado === 5 && opcion === "A") { mabelAcompaña = true; estado = 11; return; }
  if (estado === 5 && opcion === "B") { mabelAcompaña = false; estado = 6; return; }

  if (estado === 8 && opcion === "A") { tocoPiedra = true; estado = 12; return; }
  if (estado === 8 && opcion === "B") { tomoDecisionL = true; estado = 4; return; }

  if (estado === 12 && opcion === "A") { estado = 17; return; }
  if (estado === 12 && opcion === "B") { estado = 13; return; }

  if (estado === 17) {
    if (llegoATexto10) estado = 18;
    else estado = 25;
    return;
  }
}

function pantFinal() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);

  if (finalMalo) pantalla(24, "VOLVER");
  else if (finalNeutro) pantalla(28, "VOLVER");
  else if (finalBueno) pantalla(21, "VOLVER");
}

function pantCreditos() {
  background(10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Créditos\nAventura gráfica - Proyecto conjunto\nCampos Salazar F. (94790/7)\nFernandez Yamila", width / 2, height / 2);
  boton(540, 440, 80, 30, "VOLVER");
}

function pantalla(num, textoBtnA, textoBtnB) {
  pantTexto(num);
  if (textoBtnB) {
    boton(160, 300, 140, 50, textoBtnB);
    boton(340, 300, 140, 50, textoBtnA);
  } else {
    boton(540, 440, 80, 30, textoBtnA);
  }
}

function pantDecisiones(opcionIzq, opcionDer) {
  pantTexto(estado);
  boton(100, 420, 120, 40, opcionIzq);
  boton(400, 420, 120, 40, opcionDer);
}

function limiteBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w &&
         mouseY > y && mouseY < y + h;
}

function boton(x, y, w, h, texto) {
  let hover = limiteBoton(x, y, w, h);
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

function pantTexto(num) {
  fill(255);
  textAlign(CENTER, TOP);
  textSize(16);
  let txt = narrativa[num].join("\n");
  text(txt, 40, 40, 560, 300);
}

function resetJuego() {
  estado = 0;
  mabelAcompaña = false;
  tocoPiedra = false;
  finalMalo = false;
  finalNeutro = false;
  finalBueno = false;
  llegoATexto5 = false;
  llegoATexto8 = false;
  tomoDecisionL = false;
  llegoATexto10 = false;
}
