// localStorageUtil.js
const localStorageKey = 'scores';

function saveUserScores(username, level, score) {
  const userScores = { username, level, score };
  localStorage.setItem(localStorageKey, JSON.stringify(userScores));
}

function getUserScores() {
  const storedScores = localStorage.getItem(localStorageKey);
  return storedScores ? JSON.parse(storedScores) : null;
}

module.exports = { saveUserScores, getUserScores };
