import React, {useState} from 'react'
import {FizzBuzz} from 'utils/FizzBuzz'
export default function FizzCounter ()
{
    const [count, setCount] = useState(1)

    return (
        <div>
            <div>
                <p data-testid="count">{FizzBuzz(count)}</p>
            </div>
        </div>
    )
}