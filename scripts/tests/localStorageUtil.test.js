//test to find username, level and score in local storage object

// localStorageUtil.test.js
const { saveUserScores, getUserScores } = require('../localStorageUtil');

beforeEach(() => {
  // Clear local storage before each test
  localStorage.clear();
});

test('saveUserScores stores user scores in local storage', () => {
  const testUsername = 'JohnDoe';
  const testLevel = 5;
  const testScore = 1000;

  // Save user scores to local storage
  saveUserScores(testUsername, testLevel, testScore);

  // Retrieve user scores from local storage
  const retrievedUserScores = getUserScores();

  // Check if the scores are stored correctly
  expect(retrievedUserScores).toEqual({
    username: testUsername,
    level: testLevel,
    score: testScore,
  });
});

test('getUserScores returns null if no scores are stored', () => {
  // Retrieve user scores from local storage when no scores are stored
  const retrievedUserScores = getUserScores();

  // Check if null is returned
  expect(retrievedUserScores).toBeNull();
});
