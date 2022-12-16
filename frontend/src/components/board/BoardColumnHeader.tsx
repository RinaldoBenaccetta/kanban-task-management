import React, { PropsWithChildren } from 'react'
import { ColorDot, ColumnTitle, Header } from './styles/BoardColumnHeader'

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
