import { handleSubmit } from '../js/formHandler'

describe('Test function handleSubmit()', () => {
    test('It should return true', () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test, type of handleSubmit() function', () => {
    test('It should be a function', () => {
        expect(typeof handleSubmit).toBe('function')
    })
})
