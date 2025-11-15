class Juego{
  constructor(){
    this.escenario = new Escenario();
    this.crearPersonaje();
    this.crearObstaculos(); 
    this.piedra = null;
    
    
    this.tiempoLimite = 30;
    this.tiempoRestante = this.tiempoLimite;
    this.ultimoTiempo = millis();
  }

  dibujar(){
    this.maquinaEstados();
  }
  
  maquinaEstados(){
    // pantalla inicio
    if (estado == 0){
      background(50);
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("PRESIONA ENTER PARA COMENZAR", width/2, height/2);
      return;
    }
    
    //segunda pantalla
    if (estado == 1){
      this.escenario.dibujar();
      this.actualizarTiempo();
      this.personaje.dibujar();
    
      for (let i = 0; i < this.obstaculo.length; i++){
        this.obstaculo[i].dibujar();
      }
      
      this.dibujarTiempo();
      
      if (this.personaje.posX > width - 50){
        estado = 2;
        this.personaje.posX = 30;
        this.escenario.cambiarFondo();
      }
      return;
    }
  
  //tercer pantalla
    if (estado == 2){
      this.escenario.dibujar();
      this.actualizarTiempo();
      
      this.personaje.dibujar();
      
      for (let i = 0; i < this.obstaculo.length; i++){
        this.obstaculo[i].dibujar();
      }
      
      this.dibujarTiempo();
      
      if (this.personaje.posX > width - 50){
        estado = 3;
        this.personaje.posX = 30;
        this.escenario.cambiarFondo();
      }
      return;
    }
  
  
  //cuarta pantalla 
    if (estado == 3){
      if(!this.piedra){
        this.piedra = new PiedraLuminosa();
      }
      this.escenario.dibujar();
      this.actualizarTiempo();
      this.personaje.dibujar();
      this.piedra.dibujar();
      this.dibujarTiempo();
      
      if (this.personaje.toca(this.piedra)){
        estado = 4;
        this.escenario.cambiarFondo();
      }
      return;
    }
  
  //quinta pantlla
    if (estado == 4){
      background(0);
      fill (255);
      textAlign(CENTER, CENTER);
      textSize(28);
      text("LLEGUÉ A LA LUZ...", width/2, height/2 - 20);
      textSize(10);
      text("Para ver más ir a TPFinalParte1. Hacé click para reiniciar", width/2, height/2 + 20);
      return;
    }
      
    if (estado == 5){
      background(0);
      fill(255, 50, 50);
      textAlign(CENTER, CENTER);
      textSize(32);
      text("DEMASIADO LENTO... \nNO LLEGUÉ A LA PIEDRA A TIEMPO", width/2, height/2 - 20);
      textSize(20);
      text("Hacé click para reiniciar", width/2, height/2 + 20);
      return;
    }
  } 
  
  actualizarTiempo(){
    let ahora = millis();
    if (ahora - this.ultimoTiempo >= 1000){
      this.tiempoRestante--;
      this.ultimoTiempo = ahora;
    }
    if (this.tiempoRestante <= 0){
      estado = 5;
    }
  }


  dibujarTiempo(){
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Tiempo: " + this.tiempoRestante, 10, 10);
  }
    
    
  reinicioJuego(){
    this.personaje = new Personaje(30, 200);
    this.piedra = null;
    this.tiempoRestante = this.tiempoLimite;
    this.ultimoTiempo = millis();
  }


  crearPersonaje(){
    this.personaje = new Personaje(30, 200);
  }

// movimiento pj  
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }

  crearObstaculos(){
   this.obstaculo = []; 
   for(let i=0; i<10; i++){
     this.obstaculo[i] = new Obstaculo();
    }
  }

}
