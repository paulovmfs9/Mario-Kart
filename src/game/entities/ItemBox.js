// Classe representando uma caixa de item

export class ItemBox {
  constructor(segment, offset) {
    this.segment = segment;
    this.offset = offset;
    this.active = true;
    this.spin = Math.random() * Math.PI * 2;
  }
  
  update(dt) {
    this.spin += dt * 4;
  }
  
  deactivate(duration = 4500) {
    this.active = false;
    setTimeout(() => {
      this.active = true;
    }, duration);
  }
}
