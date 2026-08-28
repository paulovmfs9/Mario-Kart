// Dados de itens

import { ITEM_TYPES } from './constants.js';

export const ITEM_INFO = {
  [ITEM_TYPES.NONE]: {
    icon: '?',
    name: 'Sem item',
    desc: 'Passe por uma caixa de item para ativar a roleta.',
  },
  [ITEM_TYPES.MUSHROOM]: {
    icon: '🍄',
    name: 'Turbo Cogumelo',
    desc: 'Dá um impulso curto de velocidade. Ótimo para sair forte da curva.',
  },
  [ITEM_TYPES.SHELL]: {
    icon: '🐚',
    name: 'Casca Azul-Céu',
    desc: 'Atordoa o rival mais próximo à frente por um momento.',
  },
  [ITEM_TYPES.BANANA]: {
    icon: '🍌',
    name: 'Banana Escorregadia',
    desc: 'Solta uma armadilha atrás do kart para atrapalhar rivais.',
  },
  [ITEM_TYPES.STAR]: {
    icon: '⭐',
    name: 'Estrela Açucarada',
    desc: 'Fica invencível por poucos segundos e aumenta a velocidade.',
  },
};

export const ITEM_POOL = [
  ITEM_TYPES.MUSHROOM,
  ITEM_TYPES.SHELL,
  ITEM_TYPES.BANANA,
  ITEM_TYPES.STAR,
];
