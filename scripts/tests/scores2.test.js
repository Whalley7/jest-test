// scores.test.js

const { displayScoreAndLevel } = require('/workspace/jest-test/scripts/scores.js');

beforeEach(() => {
    document.body.innerHTML = '<div id="scoreContainer"></div>';
});

test('displays score and level in the DOM', () => {
    const difficulty = 'easy';
    const score = 100;

    displayScoreAndLevel(difficulty, score);

    const container = document.getElementById('scoreContainer');
    const displayedText = container.textContent;

    expect(displayedText).toContain(`Level: ${difficulty}`);
    expect(displayedText).toContain(`Score: ${score}`);
});

test('throws error if score container is not found', () => {
    document.body.innerHTML = ''; // Remove the score container

    const difficulty = 'easy';
    const score = 100;

    // Wrap the function call in a function to catch the error
    const wrapper = () => displayScoreAndLevel(difficulty, score);

    expect(wrapper).toThrowError('Score container not found in the DOM');
});
