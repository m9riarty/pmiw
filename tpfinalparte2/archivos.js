let fondos = [];
let jugador = [];
let salto;
let obstaculos = [];
let piedra;


function preload(){
  for (let i = 0; i<= 7; i++){
      fondos[i] = loadImage("data/fondo" + i + ".png");
 }
 
  for (let j = 0; j<=3; j++){
      jugador[j] = loadImage("data/dipSprite" + j + ".png");
    }
    
  salto = loadImage("data/dipSalto.png");
  for (let k = 0; k<=2; k++){
      obstaculos[k] = loadImage("data/obs" + k + ".png");
    }
  
  piedra = loadImage("data/piedraLumina.png");
}

  
