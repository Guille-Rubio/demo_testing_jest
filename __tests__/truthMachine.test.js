const truthMachine = require('../truthMachine');

test('both true equals true', () => {
    expect(truthMachine(true, true)).toBe(true);
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