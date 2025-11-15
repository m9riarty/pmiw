class Personaje{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color (0, 0, 255);
  }
  
  dibujar(){
    fill(this.miColor);
    ellipse(this.posX, this.posY, 50, 50);
  }
  
  teclaPresionada(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moverIzquierda();
    } else if(keyCode == RIGHT_ARROW){
      this.moverDerecha();
    } else if(keyCode == UP_ARROW){
      this.saltoPJ();
    } else if(keyCode == DOWN_ARROW){
    this.agacharPJ();
    }
  }
  
  moverDerecha(){
    this.posX += 60;
  }
  
  moverIzquierda(){
    this.posX -= 60;
  }

  saltoPJ(){
    this.posY -= 30;
  }

  agacharPJ(){
    this.posY += 10;
  }
  
  toca(piedra){
  let d = dist(this.posX, this.posY, piedra.posX, piedra.posY);
  return d < 50;
  }
}
