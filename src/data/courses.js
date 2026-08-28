// Dados das pistas

import { addStraight, addHill, addCurve, addSCurve } from '../utils/trackBuilder.js';

export const COURSES = [
  {
    id: 'boulevard',
    name: 'Brigadeiro Boulevard',
    klass: 'one',
    accent: '#ff8f5a',
    skyline: ['#8cd4ff', '#ecf9ff'],
    grass: '#2f7b33',
    road: '#6c6d75',
    rumbleA: '#fff7e9',
    rumbleB: '#ff4e63',
    lane: 'rgba(255, 255, 255, .06)',
    message: 'Curvas suaves, cidade doce e boosts perfeitos para aprender o drift.',
    build(road) {
      addStraight(road, 30);
      addHill(road, 22, 900);
      addCurve(road, 46, 0.8, 500);
      addStraight(road, 25);
      addCurve(road, 52, -1.1, -400);
      addStraight(road, 20);
      addSCurve(road);
      addStraight(road, 25);
    },
  },
  {
    id: 'mall',
    name: 'Morango Mall',
    klass: 'two',
    accent: '#55c8ff',
    skyline: ['#79d3ff', '#f4fbff'],
    grass: '#2f6d47',
    road: '#646a74',
    rumbleA: '#f8fbff',
    rumbleB: '#49b8ff',
    lane: 'rgba(255, 255, 255, .06)',
    message: 'Trechos velozes e uma grande curva final lembrando pistas urbanas de portátil.',
    build(road) {
      addStraight(road, 20);
      addCurve(road, 28, 0.5, 0);
      addHill(road, 15, 700);
      addCurve(road, 65, 1.4, 0);
      addStraight(road, 14);
      addCurve(road, 40, -0.9, 0);
      addStraight(road, 12);
      addCurve(road, 50, 1.2, -600);
      addStraight(road, 20);
    },
  },
  {
    id: 'harbor',
    name: 'Baunilha Harbor',
    klass: 'three',
    accent: '#79e992',
    skyline: ['#96e0ff', '#fbfffe'],
    grass: '#337748',
    road: '#676a70',
    rumbleA: '#f6fff8',
    rumbleB: '#41d16d',
    lane: 'rgba(255, 255, 255, .06)',
    message: 'Subidas, descidas e curvas encadeadas para uma corrida mais técnica.',
    build(road) {
      addStraight(road, 18);
      addHill(road, 26, 1200);
      addCurve(road, 36, -0.8, -800);
      addStraight(road, 16);
      addCurve(road, 30, 1.2, 900);
      addSCurve(road);
      addHill(road, 18, -1000);
      addStraight(road, 22);
    },
  },
];
