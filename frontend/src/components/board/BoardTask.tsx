import React from 'react'
import { BoardTaskPropsType } from '../../@types/BoardTaskPropsType'
import { SubtaskInfos, Task, TaskTitle } from './styles/BoardTask'

/**
 * Return plural or singular of "subtask" according to the provided quantity of subtasks.
 *
 * @param subtaskQuantity
 */
const subtaskWord = (subtaskQuantity: number): string =>
    subtaskQuantity > 1 ? 'subtasks' : 'subtask'

/**
 * Build the infos for subtasks.
 *
 * @param subtaskQuantity
 * @param subtaskDone
 */
const subtaskInfo = (subtaskQuantity: number, subtaskDone: number): string =>
    `${subtaskDone} of ${subtaskQuantity} ${subtaskWord(subtaskQuantity)}`

export default ({
    subtaskQuantity,
    subtaskDone,
    children,
}: BoardTaskPropsType) => {
    return (
        <Task>
            <TaskTitle>{children}</TaskTitle>
            <SubtaskInfos>
                {subtaskInfo(subtaskQuantity, subtaskDone)}
            </SubtaskInfos>
        </Task>
    )
}
