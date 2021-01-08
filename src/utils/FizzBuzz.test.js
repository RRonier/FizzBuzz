import {FizzBuzz} from 'utils/FizzBuzz'

it(`should return the same number passed if it isn't divisible by 3 or 5`, () =>
{
    expect(FizzBuzz(1)).toBe(1)
    expect(FizzBuzz(2)).toBe(2)
    expect(FizzBuzz(4)).toBe(4)
    expect(FizzBuzz(7)).toBe(7)
    expect(FizzBuzz(8)).toBe(8)
    expect(FizzBuzz(11)).toBe(11)
})

it('should return FizzBuzz if the number is divisible by 3 and 5', () =>
{
    expect(FizzBuzz(15)).toBe('FizzBuzz')
    expect(FizzBuzz(30)).toBe('FizzBuzz')
    expect(FizzBuzz(45)).toBe('FizzBuzz')
    expect(FizzBuzz(60)).toBe('FizzBuzz')
    expect(FizzBuzz(75)).toBe('FizzBuzz')
})

it('should return Fizz if the number is divisible by 3', () =>
{
    expect(FizzBuzz(3)).toBe('Fizz')
    expect(FizzBuzz(6)).toBe('Fizz')
    expect(FizzBuzz(9)).toBe('Fizz')
    expect(FizzBuzz(12)).toBe('Fizz')
})