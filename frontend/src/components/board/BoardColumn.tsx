import React, { PropsWithChildren } from 'react'
import { Column } from './styles/BoardColumn'

export default ({ children }: PropsWithChildren) => {
    return <Column>{children}</Column>
}
