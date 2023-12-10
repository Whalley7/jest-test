// userData.test.js

const { deleteUser } = require('/workspace/jest-test/scripts/userData.js');

beforeEach(() => {
    // Mock localStorage
    global.localStorage = {
        removeItem: jest.fn(),
    };
});

test('deletes user data from local storage', () => {
    // Call the function to delete user data
    deleteUser();

    // Check if removeItem was called with the correct key
    expect(localStorage.removeItem).toHaveBeenCalledWith('user');
});

test('handles error when user data removal fails', () => {
    // Mock localStorage.removeItem to throw an error
    localStorage.removeItem.mockImplementation(() => {
        throw new Error('Failed to remove item');
    });

    // Wrap the function call in a function to catch the error
    const wrapper = () => deleteUser();

    // Check if the function handles the error appropriately
    expect(wrapper).toThrowError('Failed to remove item');
});
