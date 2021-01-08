import React, {useState} from 'react'
import {FizzBuzz} from 'utils/FizzBuzz'
export default function FizzCounter ()
{
    const [count, setCount] = useState(1)

    const addCounter = () =>
    {
        setCount(count + 1)
    }

    const restCounter = () =>
    {
        setCount(count - 1)
    }

    const reset = () =>
    {
        setCount(1)
    }

    return (
        <div>
            <div>
                <button
                    data-testid="addButton"
                    disabled={count === 100}
                    onClick={addCounter}>
                    Add
                </button>
                <button
                    disabled={count === 1}
                    onClick={restCounter}>
                    Rest
                </button>
                <button
                    disabled={count === 1}
                    onClick={reset}>
                    Reset
                </button>
            </div>
            <div>
                <p data-testid="count">{FizzBuzz(count)}</p>
            </div>
        </div>
    )
}