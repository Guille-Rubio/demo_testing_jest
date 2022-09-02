const calculator = require('../utils/calculator');

describe('calculadora', () => {

    describe('sum function test', () => {

        test('adds 1 + 2 to equal 3', () => {
            expect(calculator.add(1, 2)).toBe(3);
        });

        test('adds 1 + 4 to equal 5', () => {
            expect(calculator.add(1, 4)).toBe(5);
        });

        test('adds 2 + "3" to equal 5', () => {
            expect(calculator.add(2, "3")).toBe("23");
        });
    });

    describe('substract function test', () => {
        test('substracts 5 - 3 to equal 2', () => {
            expect(calculator.substract(5, 3)).toBe(2);
        });
    });

    describe('multiply function test', () => {
        test('multiply 2 * 3 to equal 6', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });
    });

    describe('divide function test', () => {
        test('divide 2/2 to equal 1', () => {
            expect(calculator.divide(2, 2)).toBe(1);
        });

        test('divide 2/0 to equal', () => {
            expect(calculator.divide(2, 0)).toBe(Infinity);
        });
    });
})