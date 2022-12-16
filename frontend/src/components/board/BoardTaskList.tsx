import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const TaskList = styled.ul`
    list-style-type: none;

    padding: 0;
`

export default ({ children }: PropsWithChildren) => {
    return <TaskList>{children}</TaskList>
}
