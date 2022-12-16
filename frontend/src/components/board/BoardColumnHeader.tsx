import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import typography from '../../themes/typography'

const Header = styled.header`
    margin-bottom: 24px;

    height: 15px;
`

const ColorDot = styled.div`
    width: 15px;
    height: 15px;

    border-radius: 50%;

    margin-right: 12px;

    // todo : make a random color for this
    background-color: aqua;
`

const ColumnTitle = styled.h2`
    ${typography.heading.s}

    margin: 0;
    padding: 0;

    text-transform: uppercase;

    display: flex;
`

export default ({ children }: PropsWithChildren) => {
    return (
        <Header>
            <ColumnTitle>
                <ColorDot />
                <div>{children}</div>
            </ColumnTitle>
        </Header>
    )
}
