import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import FizzCounter from 'FizzCounter/FizzCounter'

it('should display the start count at 1', () =>
{
    const {getByTestId} = render(<FizzCounter />)
    expect(getByTestId('count')).toHaveTextContent('1')
})

it('should increse the count by one when the user clicks the button Add', () =>
{
    const {getByTestId, getByText} = render(<FizzCounter />)
    fireEvent.click(getByText("Add"))
    expect(getByTestId("count")).toHaveTextContent("2")
})