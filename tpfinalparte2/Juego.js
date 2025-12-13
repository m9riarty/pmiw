class Juego{
  constructor(){
    this.escenario = new Escenario();
    this.personaje = new Personaje(50, 320);
    this.piedra = new PiedraLuminosa();
    this.tiempoLimite = 30;
    this.tiempoRestante = this.tiempoLimite;
    this.ultimoTiempo = millis();
  }

  dibujar(){
    this.escenario.dibujar();

    if (estado >= 2 && estado <= 5){
      this.actualizarTiempo();
      this.personaje.actualizar();
      this.personaje.dibujar();
      this.dibujarTiempo();
    }

    if (estado >= 2 && estado <= 4 && this.personaje.posX > width - 40){
      estado++;
      this.personaje.posX = 40;
    }

    if (estado === 5){
      this.piedra.dibujar();
      if (this.personaje.toca(this.piedra)){
        estado = 6;
      }
    }

    if (this.tiempoRestante <= 0){
      estado = 7;
    }
  }

  actualizarTiempo(){
    let ahora = millis();
    if (ahora - this.ultimoTiempo >= 1000){
      this.tiempoRestante--;
      this.ultimoTiempo = ahora;
    }
  }

  dibujarTiempo(){
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Tiempo: " + this.tiempoRestante, 10, 10);
  }

  teclaPresionada(keyCode){
    if (estado >= 2 && estado <= 5){
      this.personaje.teclaPresionada(keyCode);
    }
  }

  reiniciar(){
    this.personaje = new Personaje(50, 320);
    this.tiempoRestante = this.tiempoLimite;
    this.ultimoTiempo = millis();
  }
}
