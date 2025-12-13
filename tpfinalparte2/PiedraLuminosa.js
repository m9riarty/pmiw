// esta vendría a ser la "meta", la idea es que cuando el personaje colisione se "gane" la partida y aparezca la pantalla de reinicio (con créditos) 

class PiedraLuminosa{
  constructor(){
    this.posX = width - 80;
    this.posY = 320;
    this.img = piedra;
  }

  dibujar(){
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, 80, 80);
  }
}
