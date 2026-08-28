// Funções matemáticas utilitárias

export function easeIn(a, b, percent) {
  return a + (b - a) * Math.pow(percent, 2);
}

export function easeOut(a, b, percent) {
  return a + (b - a) * (1 - Math.pow(1 - percent, 2));
}

export function easeInOut(a, b, percent) {
  return a + (b - a) * ((-Math.cos(percent * Math.PI) / 2) + 0.5);
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function percentRemaining(n, total) {
  return (n % total) / total;
}

export function increase(start, increment, max) {
  let result = start + increment;
  while (result >= max) result -= max;
  while (result < 0) result += max;
  return result;
}

export function formatTime(ms) {
  if (!ms) return '--:--';
  const total = Math.floor(ms / 10);
  const centis = total % 100;
  const secTotal = Math.floor(total / 100);
  const mins = Math.floor(secTotal / 60);
  const secs = secTotal % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
}

export function shade(hex, factor) {
  const v = hex.replace('#', '');
  const r = Math.round(parseInt(v.slice(0, 2), 16) * factor);
  const g = Math.round(parseInt(v.slice(2, 4), 16) * factor);
  const b = Math.round(parseInt(v.slice(4, 6), 16) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}
