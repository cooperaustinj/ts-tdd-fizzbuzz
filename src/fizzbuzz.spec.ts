import { FizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
    describe('getFizzBuzz', () => {
        it('Returns a String', () => {
            const sut = new FizzBuzz();
            expect(typeof sut.getFizzBuzz(10)).toBe('string');
        });
    });
});
