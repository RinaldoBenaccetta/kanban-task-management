import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Column = styled.article`
    outline: 1px solid red;

    width: 280px;

    margin: 24px 0 0 16px;
`

export default ({ children }: PropsWithChildren) => {
    return <Column>{children}</Column>
}
