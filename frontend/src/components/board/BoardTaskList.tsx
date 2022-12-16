import React, { PropsWithChildren } from 'react'
import { TaskList } from './styles/BoardTaskList'

export default ({ children }: PropsWithChildren) => {
    return <TaskList>{children}</TaskList>
}
