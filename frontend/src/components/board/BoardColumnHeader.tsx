import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import typography from '../../themes/typography'

const Header = styled.header`
    outline: 1px solid yellow;

    margin-bottom: 24px;

    display: flex;
`

const ColorDot = styled.div`
    width: 15px;
    height: 15px;

    border-radius: 50%;

    margin-right: 12px;

    // todo : make a random color for this
    background-color: aqua;
`

const ColumnTitle = styled.div`
    ${typography.heading.s}

    text-transform: uppercase;
`

export default ({ children }: PropsWithChildren) => {
    return (
        <Header>
            <ColorDot />
            <ColumnTitle>{children}</ColumnTitle>
        </Header>
    )
}
