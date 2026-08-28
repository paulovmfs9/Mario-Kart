// Classe representando um carro (player ou IA)

export class Car {
  constructor(name, color, isPlayer = false) {
    this.name = name;
    this.color = color;
    this.isPlayer = isPlayer;
    
    // Posição
    this.x = isPlayer ? 0 : Math.random() * 1.2 - 0.6;
    this.z = isPlayer ? 0 : Math.random() * 900;
    this.prevZ = this.z;
    
    // Velocidade e movimento
    this.speed = 0;
    this.lap = 1;
    this.lapProgress = 0;
    this.percent = 0;
    this.place = 1;
    
    // Estado de jogo
    this.boostTimer = 0;
    this.starTimer = 0;
    this.spinTimer = 0;
    this.driftCharge = 0;
    this.slipstream = 0;
    
    // Item
    this.item = 'none';
    
    // Stats do personagem
    this.maxStat = 1.0;
    this.accelStat = 1.0;
    this.handlingStat = 1.0;
    this.driftStat = 1.0;
    
    // IA
    this.aiTarget = isPlayer ? 0 : Math.random() * 0.6 - 0.3;
  }
  
  reset() {
    this.x = this.isPlayer ? 0 : Math.random() * 1.2 - 0.6;
    this.z = this.isPlayer ? 0 : Math.random() * 900;
    this.prevZ = this.z;
    this.speed = 0;
    this.lap = 1;
    this.lapProgress = 0;
    this.boostTimer = 0;
    this.starTimer = 0;
    this.spinTimer = 0;
    this.driftCharge = 0;
    this.item = 'none';
  }
}
