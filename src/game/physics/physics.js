// Lógica de física do jogo

import { GAME_CONFIG, PHYSICS } from '../data/constants.js';
import { clamp, increase } from '../utils/math.js';

// Atualizar física do jogador
export function updatePlayerPhysics(player, keys, dt, segment) {
  const accelKey = keys.ArrowUp || keys.w || keys.W;
  const brakeKey = keys.ArrowDown || keys.s || keys.S;
  const leftKey = keys.ArrowLeft || keys.a || keys.A;
  const rightKey = keys.ArrowRight || keys.d || keys.D;
  const driftKey = keys.Shift;
  
  // Aceleração / Frenação
  const maxPlayerSpeed = PHYSICS.maxSpeed * player.maxStat;
  const acceleration = PHYSICS.accel * player.accelStat;
  
  if (accelKey) {
    player.speed = clamp(player.speed + acceleration * dt, 0, maxPlayerSpeed);
  } else if (brakeKey) {
    player.speed = clamp(player.speed + PHYSICS.breaking * dt, 0, maxPlayerSpeed);
  } else {
    player.speed = clamp(player.speed + PHYSICS.decel * dt, 0, maxPlayerSpeed);
  }
  
  // Timers
  if (player.boostTimer > 0) player.boostTimer -= dt;
  if (player.starTimer > 0) player.starTimer -= dt;
  if (player.spinTimer > 0) {
    player.spinTimer -= dt;
    player.speed = Math.max(player.speed - maxPlayerSpeed * dt * 0.7, maxPlayerSpeed * 0.18);
  }
  
  // Direção
  let steer = 0;
  if (leftKey) steer -= 1;
  if (rightKey) steer += 1;
  
  // Curva forçada pelo caminho
  const curveForce = segment.curve * PHYSICS.centrifugal * (player.speed / PHYSICS.maxSpeed);
  
  // Direção com derrapagem
  let handling = 2.2 * player.handlingStat;
  if (driftKey && Math.abs(steer) > 0 && player.speed > PHYSICS.maxSpeed * 0.28) {
    handling *= 1.18;
    player.driftCharge = clamp(player.driftCharge + dt * 58 * player.driftStat, 0, 100);
  } else if (player.driftCharge > 0) {
    if (player.driftCharge > 32) {
      player.boostTimer = Math.max(player.boostTimer, 0.55 + player.driftCharge / 110);
    }
    player.driftCharge = 0;
  }
  
  // Aplica movimento horizontal
  player.x -= curveForce * dt * 2.7;
  player.x += steer * handling * dt * (player.speed / PHYSICS.maxSpeed);
  player.x = clamp(player.x, -2.2, 2.2);
  
  // Fora da pista
  const offRoad = Math.abs(player.x) > 1.18;
  if (offRoad && player.speed > PHYSICS.offRoadLimit) {
    player.speed = clamp(player.speed + PHYSICS.offRoadDecel * dt, 0, maxPlayerSpeed);
  }
  
  // Boosts e efeitos
  if (player.boostTimer > 0) {
    player.speed = clamp(player.speed + acceleration * dt * 0.9, 0, maxPlayerSpeed * 1.2);
  }
  if (player.starTimer > 0) {
    player.speed = clamp(player.speed + acceleration * dt, 0, maxPlayerSpeed * 1.28);
  }
  
  // Avançar no caminho
  player.z = increase(player.z, player.speed * dt, 100000);
}

// Atualizar física da IA
export function updateAIPhysics(car, dt, segment, trackLength) {
  const baseSpeed = PHYSICS.maxSpeed * (0.72 + (Math.sin(car.z / 1500) + 1) * 0.07);
  car.speed = clamp(car.speed + (baseSpeed - car.speed) * dt * 1.4, PHYSICS.maxSpeed * 0.34, PHYSICS.maxSpeed * 0.94);
  
  if (car.spinTimer > 0) {
    car.spinTimer -= dt;
    car.speed *= 0.985;
  }
  
  car.z = increase(car.z, car.speed * dt, trackLength);
}

// Direção da IA
export function updateAISteering(car, dt, segment) {
  const targetOffset = Math.sin((car.z / 900) + car.aiTarget * 3) * 0.65 - segment.curve * 0.7;
  car.x += clamp(targetOffset - car.x, -1, 1) * dt * 1.4;
}

// Detectar colão com hazards
export function checkHazardCollision(car, hazard, segmentLength) {
  const dz = Math.abs(relativeDistance(car.z, hazard.z));
  const dx = Math.abs(car.x - hazard.x);
  
  if (dz < segmentLength * 0.8 && dx < 0.24) {
    return true;
  }
  return false;
}

// Detectar colão com item box
export function checkItemBoxCollision(car, itemBox, segmentLength) {
  const dz = Math.abs(relativeDistance(car.z, itemBox.segment * segmentLength));
  const dx = Math.abs(car.x - itemBox.offset);
  
  if (dz < segmentLength * 0.8 && dx < 0.25) {
    return true;
  }
  return false;
}

// Distância relativa circular
export function relativeDistance(fromZ, toZ, trackLength = 100000) {
  let diff = toZ - fromZ;
  if (diff < -trackLength / 2) diff += trackLength;
  if (diff > trackLength / 2) diff -= trackLength;
  return diff;
}
