// esta vendría a ser la "meta", la idea es que cuando el personaje colisione se "gane" la partida y aparezca la pantalla de reinicio (con créditos) 

class PiedraLuminosa{
  constructor(){
    this.posX = 500;
    this.posY = 240;
    this.miColor = color (0, 200, 255);
  }
  
  dibujar(){
  fill(this.miColor);
  ellipse(this.posX, this.posY, 50, 50);
  }
  
}
