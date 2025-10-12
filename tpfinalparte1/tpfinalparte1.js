/* TP FINAL PT 1 - campos salazar 94790/7 y fernandez yamila (...)
  SERIE ANIMADA ELEGIDA: Gravity Falls
  LINK AVENTURA GRÁFICA: https://www.canva.com/design/DAGzzAZVqh0/0LqYn7NOViFkjwPPghhKvw/edit
  (quisimos subirla como .jpg pero no se apreciaban las letras de nuestro árbol, por lo que agregamos un .pdf de la guía en texto)
 
  trabajo dividido en dos partes para una mejor organización: estructura, flujo de pantallas y botones; imágenes, sonido y texto. 
  
*/



let narrativa = [];
let estado = 0;
let ancho = 640;
let alto = 480;

// decisiones y transiciones
let decisionesA = [];
let decisionesB = [];
let siguienteA = [];
let siguienteB = [];

// variables narrativas y seguimiento
let mabelAcompaña = false;
let tocoPiedra = false;
let finalMalo = false;
let finalNeutro = false;
let finalBueno = false;

// seguimiento del flujo
let llegoATexto5 = false;
let llegoATexto8 = false;
let tomoDecisionL = false;

function preload() {
  for (let i = 0; i <= 28; i++) {
    narrativa[i] = loadStrings("assets/texto" + i + ".txt");
  }

  // DECISIONES
  decisionesA[0] = "Comenzar"; decisionesB[0] = "Créditos";
  decisionesA[28] = "Investigar la luz"; decisionesB[28] = "Volver a dormir";
  decisionesA[1] = "Tocar la piedra sin más"; decisionesB[1] = "Verificar símbolos";
  decisionesA[2] = "Correr hacia el bosque"; decisionesB[2] = "Despertar a Mabel";
  decisionesA[3] = "Contarle los indicios"; decisionesB[3] = "Contarle sobre la luz";
  decisionesA[4] = "Intentar de nuevo"; decisionesB[4] = "Irse solo";
  decisionesA[6] = "Tocar la piedra con cuidado"; decisionesB[6] = "Volver a casa para contarle a Mabel";
  decisionesA[12] = "Hablarle a Ford"; decisionesB[12] = "Esconderse y observar";
}

function setup() {
  createCanvas(ancho, alto);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(20);

  if (estado === 10) pantCreditos();
  else if (finalMalo || finalNeutro || finalBueno) pantFinal();
  else if (decisionesA[estado] && decisionesB[estado]) pantDecisiones(decisionesA[estado], decisionesB[estado]);
  else pantalla(estado, "SIGUIENTE");
}

function mousePressed() {
  if (decisionesA[estado] && limiteBoton(100, 420, 120, 40)) seleccionar("A");
  else if (decisionesB[estado] && limiteBoton(400, 420, 120, 40)) seleccionar("B");
  else if (!decisionesB[estado] && limiteBoton(540, 440, 80, 30)) siguienteTexto();

  if ((estado === 10 || finalMalo || finalNeutro || finalBueno) && limiteBoton(540, 440, 80, 30)) {
    resetJuego();
  }
}

function siguienteTexto() {
// guia texto y pantallas según el orden de la historia... ya sé que nos complicamos
  if (estado === 5) { // Texto5 → Texto10
    llegoATexto5 = true;
    estado = 10;
  } else if (estado === 7) { // Texto7 → Texto8
    estado = 8;
    llegoATexto8 = true;
  } else if (estado === 8) { // Texto8 → Texto11
    estado = 11;
  } else if (estado === 11) { // Texto11 → Texto12
    estado = 12;
  } else if (estado === 24) { // Texto24 → Texto14
    estado = 14;
  } else if (estado === 25) { // Texto25 → Texto15
    estado = 15;
  } else if (estado === 15) { // Texto15 → Texto16 (final malo)
    estado = 16;
    finalMalo = true;
  } else if (estado === 18) { // Texto18 → Texto19
    estado = 19;
  } else if (estado === 19) { // Texto19 → Texto20 (final neutro)
    estado = 20;
    finalNeutro = true;
  } else if (estado === 21) { // Texto21 → Texto22
    estado = 22;
  } else if (estado === 22) { // Texto22 → Texto23 (final bueno)
    estado = 23;
    finalBueno = true;
  } else {
    estado++;
  }
}

function seleccionar(opcion) {
  // variables narrativas
  if (estado === 3 && opcion === "A") { // DecisionE
    estado = 7;
    return;
  }

  if (estado === 3 && opcion === "B") { // DecisionF
    estado = 4;
    return;
  }

  if (estado === 4 && opcion === "A") { // DecisionG
    estado = 9;
    return;
  }

  if (estado === 4 && opcion === "B") { // DecisionH
    estado = 5;
    return;
  }

  if (estado === 9) { // tras Texto9, continúa secuencia 7-8-11
    estado = 7;
    return;
  }

  if (estado === 6 && opcion === "A") { // DecisionK
    estado = 11;
    return;
  }

  if (estado === 6 && opcion === "B") { // DecisionL
    estado = 3;
    tomoDecisionL = true;
    return;
  }

  if (estado === 12 && opcion === "A") { // DecisionM
    estado = 17;
    return;
  }

  if (estado === 12 && opcion === "B") { // DecisionN
    estado = 13;
    return;
  }

  if (estado === 13) {
    // si NO llegó a Texto5 → Texto24 → 14 → 22 → 23 (final bueno)
    // si llegó a Texto5 o tomó DecisionL → Texto25 → 15 → 16 (final malo)
    if (!llegoATexto5) estado = 24;
    else estado = 25;
    return;
  }

  if (estado === 17) {
    // Si NO llegó a Texto8 o tomó DecisionL → Texto26 → 18 → 19 → 20 (final neutro)
    // Si llegó a Texto8 → Texto27 → 21 → 22 → 23 (final bueno)
    if (llegoATexto8 && !tomoDecisionL) estado = 27;
    else estado = 26;
    return;
  }

  // rutas normales
  if (estado === 0 && opcion === "A") estado = 28;
  else if (estado === 0 && opcion === "B") estado = 10;
  else if (estado === 28 && opcion === "A") estado = 1;
  else if (estado === 28 && opcion === "B") estado = 2;
  else if (estado === 1 && opcion === "A") estado = 11;
  else if (estado === 1 && opcion === "B") estado = 6;
  else if (estado === 2 && opcion === "A") estado = 7;
  else if (estado === 2 && opcion === "B") estado = 3;
}

function pantFinal() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  if (finalMalo) pantalla(16, "VOLVER");
  else if (finalNeutro) pantalla(20, "VOLVER");
  else if (finalBueno) pantalla(23, "VOLVER");
}

function pantCreditos() {
  background(10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Créditos\nAventura gráfica - Proyecto conjunto\nCampos Salazar F. (94790/7)\nFernandez Yamila", width / 2, height / 2);
  boton(250, 420, 140, 40, "VOLVER");
  textAlign(LEFT);
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
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
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
  fill(0, 180);
  noStroke();
  rect(20, 100, 600, 100, 12);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(14);
  text(narrativa[num], 40, 110, 560, 80);
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
}
