// Constantes de configuração do jogo

export const GAME_CONFIG = {
  roadWidth: 1800,
  segmentLength: 220,
  rumbleLength: 3,
  drawDistance: 220,
  cameraHeight: 1100,
  cameraDepth: 0.92,
  lanes: 3,
  lapGoal: 3,
};

// Será calculado baseado em segmentLength
export const PHYSICS = {
  maxSpeed: 0,
  accel: 0,
  breaking: 0,
  decel: 0,
  offRoadDecel: 0,
  offRoadLimit: 0,
  centrifugal: 0.23,
};

// Inicializar valores de physics
export function initializePhysics() {
  PHYSICS.maxSpeed = GAME_CONFIG.segmentLength / (1 / 60) * 0.88;
  PHYSICS.accel = PHYSICS.maxSpeed / 6.2;
  PHYSICS.breaking = -PHYSICS.maxSpeed / 3.4;
  PHYSICS.decel = -PHYSICS.maxSpeed / 7.4;
  PHYSICS.offRoadDecel = -PHYSICS.maxSpeed / 2.8;
  PHYSICS.offRoadLimit = PHYSICS.maxSpeed / 4;
}

export const MODES = {
  GRAND_PRIX: 'grand-prix',
  TIME_TRIAL: 'time-trial',
};

export const GAME_STATUS = {
  READY: 'Pronto',
  RUNNING: 'Correndo',
  VICTORY: 'Vitória!',
};

export const ITEM_TYPES = {
  NONE: 'none',
  MUSHROOM: 'mushroom',
  SHELL: 'shell',
  BANANA: 'banana',
  STAR: 'star',
};
