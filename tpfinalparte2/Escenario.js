class Escenario{
  constructor(){
    this.fondos = fondos;
  }

  dibujar(){
    let f = estado;
    if (f < 0) f = 0;
    if (f >= this.fondos.length) f = this.fondos.length - 1;

    imageMode(CORNER);
    image(this.fondos[f], 0, 0, width, height);
  }
}
