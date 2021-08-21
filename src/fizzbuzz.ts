/*
 * Write a program that accepts a number as a command line argument (assume good input).
 * Then, print each number separated by a comma.
 *
 * For each multiple of 3, print "Fizz" instead of the number.
 * For each multiple of 5, print "Buzz" instead of the number.
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 */

function isMultipleOf(value: number, m: number): boolean {
    return value % m === 0;
}

export interface IFizzBuzz {
    getFizzBuzz(value: number): string;
}

export class FizzBuzz implements IFizzBuzz {
    getFizzBuzz(value: number): string {
        let temp = '';
        for (let i = 1; i <= value; i++) {
            if (isMultipleOf(i, 5) && isMultipleOf(i, 3)) {
                temp += 'FizzBuzz';
            } else if (isMultipleOf(i, 3)) {
                temp += 'Fizz';
            } else if (isMultipleOf(i, 5)) {
                temp += 'Buzz';
            } else temp += i;
            temp += ', ';
        }
        return temp.substring(0, temp.length - 2);
    }
}

export class RecursiveFizzBuzz implements IFizzBuzz {
    getFizzBuzz(value: number): string {
        if(value === 1) return '1';
        let v = value.toString();
        if (isMultipleOf(value, 5) && isMultipleOf(value, 3)) {
            v = 'FizzBuzz';
        } else if (isMultipleOf(value, 5)) {
            v = 'Buzz';
        } else if (isMultipleOf(value, 3)) {
            v = 'Fizz';
        }
        return this.getFizzBuzz(value - 1) + ', ' + v;
    }
}