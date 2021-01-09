import React, { useState } from 'react'
import { FizzBuzz } from 'utils/FizzBuzz'
import style from 'FizzCounter/FizzCounter.module.css'

export default function FizzCounter() {
    const [ count, setCount ] = useState( 1 )

    const addCounter = () => {
        setCount( count + 1 )
    }

    const restCounter = () => {
        setCount( count - 1 )
    }

    const reset = () => {
        setCount( 1 )
    }

    return (
        <div>
            <div>
                <button
                    className={ style.button }
                    disabled={ count === 100 }
                    onClick={ addCounter }>
                    Add
                </button>
                <button
                    className={ style.button }
                    disabled={ count === 1 }
                    onClick={ restCounter }>
                    Rest
                </button>
                <button
                    className={ style.button }
                    disabled={ count === 1 }
                    onClick={ reset }>
                    Reset
                </button>
            </div>
            <div className={ style.element }>
                <p
                    data-testid="count"
                    className={ style.result }
                >
                    { FizzBuzz( count ) }
                </p>
            </div>
        </div>
    )
}