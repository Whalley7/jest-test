// scores.test.js

const { openScore } = require('/workspace/jest-test/scripts/scores.js');
beforeEach(() => {
    // Mock localStorage
    global.localStorage = {
        getItem: jest.fn(),
    };
});

test('opens easy level score from local storage', () => {
    // Mock the local storage getItem method for the easy level
    localStorage.getItem.mockReturnValueOnce(JSON.stringify({ score: 100 }));

    const result = openScore('easy');

    // Check if the function returns the correct score
    expect(result).toEqual({ score: 100 });

    // Check if the correct key was used to retrieve the score
    expect(localStorage.getItem).toHaveBeenCalledWith('score_easy');
});

test('opens medium level score from local storage', () => {
    // Mock the local storage getItem method for the medium level
    localStorage.getItem.mockReturnValueOnce(JSON.stringify({ score: 200 }));

    const result = openScore('medium');

    // Check if the function returns the correct score
    expect(result).toEqual({ score: 200 });

    // Check if the correct key was used to retrieve the score
    expect(localStorage.getItem).toHaveBeenCalledWith('score_medium');
});

test('opens high level score from local storage', () => {
    // Mock the local storage getItem method for the high level
    localStorage.getItem.mockReturnValueOnce(JSON.stringify({ score: 300 }));

    const result = openScore('high');

    // Check if the function returns the correct score
    expect(result).toEqual({ score: 300 });

    // Check if the correct key was used to retrieve the score
    expect(localStorage.getItem).toHaveBeenCalledWith('score_high');
});

test('returns null for non-existent score', () => {
    // Mock the local storage getItem method for a non-existent level
    localStorage.getItem.mockReturnValueOnce(null);

    const result = openScore('nonExistentLevel');

    // Check if the function returns null for non-existent score
    expect(result).toBeNull();

    // Check if the correct key was used to retrieve the score
    expect(localStorage.getItem).toHaveBeenCalledWith('score_nonExistentLevel');
});
