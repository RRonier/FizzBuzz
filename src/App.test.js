import React from 'react'
import FizzCounter from 'FizzCounter/FizzCounter'
import {render} from '@testing-library/react'

it('should render the component correctly', () =>
{
    const component = render(<FizzCounter />)
    expect(component).toMatchSnapshot()
})