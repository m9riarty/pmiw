class Escenario{
 // estos colores deberían reemplazarse por fondos
  constructor() {
    this.fondos = [
    color(20),
    color(70),
    color(120),
    color(190),
    color(270),
    ];
   
   this.fondoActual = 0;
  }


  dibujar(){
    // fondo-color correspondiente
    fill(this.fondos[this.fondoActual]);
    rect(0, 0, width, height);
  }

  cambiarFondo(){
    if (this.fondoActual < this.fondos.length - 1){
      this.fondoActual++;
    }
  }
}
