export const FizzBuzz = (num) =>
{
    if (num % 3 === 0 && num % 5 === 0)
    {
        return 'FizzBuzz'
    }
    if (num % 3 === 0 && num % 5 !== 0)
    {
        return 'Fizz'
    }
    return num
}