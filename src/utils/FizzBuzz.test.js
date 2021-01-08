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