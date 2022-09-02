const truthMachine = require('../utils/truthMachine');

describe('truthmachine', () => {
    test('both true equals true', () => {
        expect(truthMachine(true, true)).toBeTruthy();
    });

    test('first true and second false equals false', () => {
        expect(truthMachine(true, false)).toBe(false);
    });

    test('first false and second true equals false', () => {
        expect(truthMachine(false, true)).toBe(false);
    });

    test('both false equals false', () => {
        expect(truthMachine(false, false)).toBe(false);
    });

})

