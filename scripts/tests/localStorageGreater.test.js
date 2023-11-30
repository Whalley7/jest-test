// localStorageGreater.test.js
const { saveUserScores, getUserScore } = require('../localStorageGreater');

beforeEach(() => {
  // Clear local storage before each test
  localStorage.clear();
});

test('New score for easy level is greater than old score', () => {
  const testUsername = 'JohnDoe';
  const easyLevel = 'easy';
  const oldScore = 1000;
  const newScore = 1500;

  // Save the old score
  saveUserScores(testUsername, easyLevel, oldScore);

  // Save the new score
  saveUserScores(testUsername, easyLevel, newScore);

  // Retrieve the scores
  const retrievedOldScore = getUserScore(testUsername, easyLevel);

  // Check if the new score is greater than the old score
  expect(newScore).toBeGreaterThan(retrievedOldScore);
});
