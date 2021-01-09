import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FizzCounter from 'FizzCounter/FizzCounter'

it( 'should display the start count at 1', () => {
    const { getByTestId } = render( <FizzCounter /> )
    expect( getByTestId( 'count' ) ).toHaveTextContent( '1' )
})

it( 'should increse the count by one when the user clicks the button Add', () => {
    const { getByTestId, getByText } = render( <FizzCounter /> )
    fireEvent.click( getByText( 'Add' ) )
    expect( getByTestId( 'count' ) ).toHaveTextContent( '2' )
})

it( 'should decrese the count by one when the user clicks the button Rest', () => {
    const { getByTestId, getByText } = render( <FizzCounter /> )
    fireEvent.click( getByText( 'Rest' ) )
    expect( getByTestId( 'count' ) ).toHaveTextContent( '1' )
})

it( 'should reset the count to one when the user clicks the button Reset', () => {
    const { getByTestId, getByText } = render( <FizzCounter /> )
    fireEvent.click( getByText( 'Reset' ) )
    expect( getByTestId( 'count' ) ).toHaveTextContent( '1' )
})