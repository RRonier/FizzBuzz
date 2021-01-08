import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import FizzCounter from 'FizzCounter/FizzCounter'

it('should display the start count at 1', () =>
{
    const {getByTestId} = render(<FizzCounter />)
    expect(getByTestId('count')).toHaveTextContent('1')
})