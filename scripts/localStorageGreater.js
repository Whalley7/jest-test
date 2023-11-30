// localStorageGreater.js
const localStorageKey = 'scores';

function saveUserScores(username, level, score) {
  const userScores = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  userScores[username] = userScores[username] || {};
  userScores[username][level] = score;
  localStorage.setItem(localStorageKey, JSON.stringify(userScores));
}

function getUserScore(username, level) {
  const userScores = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  return userScores[username] && userScores[username][level] ? userScores[username][level] : null;
}

module.exports = { saveUserScores, getUserScore };
