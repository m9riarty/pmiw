class Personaje {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.estado = "normal";
    this.frame = 0;
    this.frameDelay = 0;

    this.sprites = jugador;
    this.spriteSalto = salto;

    this.suelo = y;
    this.velX = 5;

    this.velY= 0;
    this.gravedad = 0.5;
    this.salto = -13;
  }

  actualizar() {
    if (keyIsDown(RIGHT_ARROW)) {//si la tecla esta presionada, el personaje se mantiene animado al correr
      this.posX += this.velX;
      this.estado = "camina";
    } else if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.velX;
      this.estado = "camina";
    } else if (this.velY===0) {
      this.estado = "normal";
      this.frame = 0;
    }

    if (this.velY!==0) {
      this.estado = "salta"
    }


    if (this.estado === "camina") {
      this.frameDelay++;
      if (this.frameDelay > 6) {
        this.frame++;
        this.frameDelay = 0;

        if (this.frame >= this.sprites.length) {
          this.frame = 0;
        }
      }
    }

    this.velY += this.gravedad;
    this.posY += this.velY;

    if (this.posY >= this.suelo) {
      this.posY = this.suelo;
      this.velY = 0;
    } else {
      this.estado = "salta";
    }

    if (this.estado === "normal") {
      this.frame = 0;
    }
  }

  dibujar() {
    imageMode(CENTER);

    if (this.estado === "salta") {
      image(this.spriteSalto, this.posX, this.posY, 120, 160);
    } else {
      image (this.sprites[this.frame], this.posX, this.posY, 120, 160);
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode === RIGHT_ARROW) {
      this.estado = "camina";
      this.posX += 60;
    }

    if (keyCode === LEFT_ARROW) {
      this.estado = "camina";
      this.posX -= 60;
      if (this.posX < 40) this.posX = 40;
    }

    if (keyCode === UP_ARROW && this.velY === 0) {
      this.velY = this.salto;
      this.estado = "salta";
      //this.posY -= 90;
    }
  }

  toca(piedra) {
    return dist(this.posX, this.posY, piedra.posX, piedra.posY) < 50;
  }

  choque(obstaculo) {// si toca el obstaculo pierde
    return dist(this.posX, this.posY, obstaculo.posX, obstaculo.posY) < 50;
  }
}
