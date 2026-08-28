// Sistema de input/controle

export class InputHandler {
  constructor() {
    this.keys = Object.create(null);
    this.listeners = [];
    
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));
  }
  
  onKeyDown(event) {
    this.keys[event.key] = true;
  }
  
  onKeyUp(event) {
    this.keys[event.key] = false;
  }
  
  getKeys() {
    return this.keys;
  }
  
  isKeyPressed(key) {
    return this.keys[key] === true;
  }
  
  subscribe(callback) {
    this.listeners.push(callback);
  }
}
