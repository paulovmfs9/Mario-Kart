// Gerenciamento de armazenamento local

const STORAGE_KEY = 'mario-kart-data';

export function saveRecord(characterId, courseId, lapTime) {
  const data = loadData();
  const key = `${characterId}-${courseId}`;
  if (!data.records[key] || lapTime < data.records[key]) {
    data.records[key] = lapTime;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export function getRecord(characterId, courseId) {
  const data = loadData();
  const key = `${characterId}-${courseId}`;
  return data.records[key] || null;
}

export function saveGamePreferences(prefs) {
  const data = loadData();
  data.preferences = { ...data.preferences, ...prefs };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getGamePreferences() {
  const data = loadData();
  return data.preferences;
}

function loadData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { records: {}, preferences: {} };
  } catch (e) {
    return { records: {}, preferences: {} };
  }
}
