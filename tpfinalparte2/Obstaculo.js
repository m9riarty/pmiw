class Obstaculo{
  constructor(indice){
    this.posX = 640;
    this.posY = 350;
    this.tamX = 110;
    this.tamY = 80;
    
    this.obs = obstaculos;
    this.img = random(this.obs);//que muestre cualquiera de los obstaculos de forma random
    
    this.velX = 5;//velocidad de movimiento
  }

  dibujar(){
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
  }
  
  mover(){
   this.posX -= this.velX; 
  }
  
   fueraDePantalla() {
    return this.posX < -this.tamX;
  }
}
