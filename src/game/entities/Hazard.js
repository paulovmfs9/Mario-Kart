// Classe representando um hazard (banana, etc)

export class Hazard {
  constructor(z, x, type, timer = 16) {
    this.z = z;
    this.x = x;
    this.type = type; // 'banana', etc
    this.timer = timer;
  }
  
  update(dt) {
    this.timer -= dt;
  }
  
  isAlive() {
    return this.timer > 0;
  }
}
