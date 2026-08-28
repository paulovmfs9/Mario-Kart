// Funções para construir a pista

import { GAME_CONFIG } from '../data/constants.js';
import { easeIn, easeInOut } from './math.js';

function addSegment(road, curve, y) {
  const n = road.length;
  road.push({
    index: n,
    p1: {
      world: {
        x: 0,
        y: n === 0 ? 0 : road[n - 1].p2.world.y,
        z: n * GAME_CONFIG.segmentLength,
      },
      screen: {},
      camera: {},
    },
    p2: {
      world: { x: 0, y, z: (n + 1) * GAME_CONFIG.segmentLength },
      screen: {},
      camera: {},
    },
    curve,
    sprites: [],
    cars: [],
    color: Math.floor(n / GAME_CONFIG.rumbleLength) % 2,
  });
}

function addRoad(road, enter, hold, leave, curve, y) {
  const startY = road.length === 0 ? 0 : road[road.length - 1].p2.world.y;
  const endY = startY + (y || 0);
  const total = enter + hold + leave;
  for (let n = 0; n < enter; n++)
    addSegment(road, easeIn(0, curve, n / enter), easeInOut(startY, endY, n / total));
  for (let n = 0; n < hold; n++)
    addSegment(road, curve, easeInOut(startY, endY, (enter + n) / total));
  for (let n = 0; n < leave; n++)
    addSegment(
      road,
      easeInOut(curve, 0, n / leave),
      easeInOut(startY, endY, (enter + hold + n) / total)
    );
}

export function addStraight(road, num = 25) {
  addRoad(road, num, num, num, 0, 0);
}

export function addCurve(road, num = 30, curve = 1, hill = 0) {
  addRoad(road, num, num, num, curve, hill);
}

export function addHill(road, num = 30, hill = 900) {
  addRoad(road, num, num, num, 0, hill);
}

export function addSCurve(road) {
  addCurve(road, 18, 1, 200);
  addCurve(road, 18, -1.25, 0);
  addCurve(road, 18, 1.5, -200);
  addCurve(road, 18, -0.8, 0);
}
