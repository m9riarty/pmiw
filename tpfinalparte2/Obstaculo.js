class Obstaculo{
  constructor(){
    this.posX = 300;
    this.posY = 220;
    this.miColor = color(0, 255, 0);
  }

  dibujar(){
    fill(this.miColor);
    rect(this.posX, this.posY, 50, 50);
  }
}
