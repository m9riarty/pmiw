class Personaje{
  constructor(x, y){
    this.posX = x;
    this.posY = y;
    this.estado = "normal";
    this.frame = 0;
    this.sprites = jugador;
    this.spriteSalto = salto;
    this.suelo = y;
  }

  actualizar(){
    if (this.estado === "salta"){
      this.posY += 8;
      if (this.posY >= this.suelo){
        this.posY = this.suelo;
        this.estado = "normal";
      }
    }

    if (this.estado === "normal"){
      this.frame = 0;
    }
  }

  dibujar(){
    imageMode(CENTER);

    if (this.estado === "salta"){
      image(this.spriteSalto, this.posX, this.posY, 120, 160);
    } else {
      image(this.sprites[this.frame | 0], this.posX, this.posY, 120, 160);
    }
  }

  teclaPresionada(keyCode){
    if (keyCode === RIGHT_ARROW){
      this.estado = "camina";
      this.posX += 60;
      this.frame += 0.25;
      if (this.frame >= this.sprites.length){
        this.frame = 1;
      }
    }

    if (keyCode === LEFT_ARROW){
      this.estado = "camina";
      this.posX -= 60;
      if (this.posX < 40) this.posX = 40;
    }

    if (keyCode === UP_ARROW && this.estado !== "salta"){
      this.estado = "salta";
      this.posY -= 90;
    }
  }

  toca(piedra){
    return dist(this.posX, this.posY, piedra.posX, piedra.posY) < 50;
  }
}
