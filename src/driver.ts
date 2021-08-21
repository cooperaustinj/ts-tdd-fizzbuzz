/*
 * Write a program that accepts a number as a command line argument (assume good input).
 * Then, print each number separated by a comma.
 *
 * For each multiple of 3, print "Fizz" instead of the number.
 * For each multiple of 5, print "Buzz" instead of the number.
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 */

import { FizzBuzz } from './fizzbuzz';

const input:number  = parseInt(process.argv.slice(2)[0]);
const fb = new FizzBuzz();

console.log(fb.getFizzBuzz(input));