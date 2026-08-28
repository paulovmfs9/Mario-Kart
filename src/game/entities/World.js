// Classe representando um segmento da pista

export class RoadSegment {
  constructor(index, p1World, p2World, curve) {
    this.index = index;
    this.curve = curve;
    
    // Coordenadas mundiais
    this.p1 = {
      world: p1World,
      screen: {},
      camera: {},
    };
    
    this.p2 = {
      world: p2World,
      screen: {},
      camera: {},
    };
    
    // Renderização
    this.sprites = [];
    this.cars = [];
    this.color = 0;
    this.fog = 0;
    this.looped = false;
  }
}

// Classe representando o mundo/pista
export class World {
  constructor(trackLength, segments) {
    this.trackLength = trackLength;
    this.segments = segments;
    this.itemBoxes = [];
    this.hazards = [];
  }
  
  getSegmentAt(z) {
    return this.segments[Math.floor(z / this.segments[0].index) % this.segments.length];
  }
  
  reset() {
    this.itemBoxes = [];
    this.hazards = [];
  }
}
