/*
 * Write a program that accepts a number as a command line argument (assume good input).
 * Then, print each number separated by a comma.
 *
 * For each multiple of 3, print "Fizz" instead of the number.
 * For each multiple of 5, print "Buzz" instead of the number.
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 * 
 * 2
 * '2'
 * 
 * 18
 * '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz' 
 * 
 */

import { RecursiveFizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
    describe('getFizzBuzz', () => {
        it('Given 1, returns "1"', () => {
            // Arrange
            const sut = new RecursiveFizzBuzz();

            // Act
            const result = sut.getFizzBuzz(1);
            
            // Assert
            expect(result).toBe('1');
        });

        it('Given 2, returns "1, 2"', () => {
            // Arrange
            const sut = new RecursiveFizzBuzz();

            // Act
            const result = sut.getFizzBuzz(2);
            
            // Assert
            expect(result).toBe('1, 2');
        });

        it('Given 3, returns "1, 2, Fizz"', () => {
            // Arrange
            const sut = new RecursiveFizzBuzz();

            // Act
            const result = sut.getFizzBuzz(3);
            
            // Assert
            expect(result).toBe('1, 2, Fizz');
        });

        it('Given 5, returns "1, 2, Fizz, 4, Buzz"', () => {
            // Arrange
            const sut = new RecursiveFizzBuzz();

            // Act
            const result = sut.getFizzBuzz(5);
            
            // Assert
            expect(result).toBe('1, 2, Fizz, 4, Buzz');
        });

        it('Given 15, returns correct string', () => {
            // Arrange
            const sut = new RecursiveFizzBuzz();

            // Act
            const result = sut.getFizzBuzz(15);
            
            // Assert
            expect(result).toBe('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz');
        });
        
        it('Given 18, returns correct string', () => {
            // Arrange
            const sut = new RecursiveFizzBuzz();

            // Act
            const result = sut.getFizzBuzz(18);
            
            // Assert
            expect(result).toBe('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz');
        });
    });
});
