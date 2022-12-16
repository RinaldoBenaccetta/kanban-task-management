import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { PropsThemeType } from '../../@types/ThemesType'
import typography from '../../themes/typography'
import Colors from '../../themes/variables/colors'

const Task = styled.li`
    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.frontBackground};

    margin-bottom: 20px;
    padding: 23px 16px;

    border-radius: 8px;

    box-shadow: 0 4px 6px rgba(58, 78, 126, 0.1);
`

const TaskTitle = styled.h3`
    ${typography.heading.m};

    margin: 0;
`

const SubtaskInfos = styled.p`
    ${typography.paragraph.bold};

    color: ${Colors.grey.mediumGrey};

    margin: 8px 0 0;
`

type BoardTaskProps = {
    'subtask-quantity': number
    'subtask-done': number
}

/**
 * Return plural or singular of "subtask" according to the provided quantity of subtasks.
 *
 * @param subtaskQuantity
 */
const subtaskWord = (subtaskQuantity: number) =>
    subtaskQuantity > 1 ? 'subtasks' : 'subtask'

/**
 * Build the infos for subtasks.
 *
 * @param subtaskQuantity
 * @param subtaskDone
 */
const subtaskInfo = (subtaskQuantity: number, subtaskDone: number) =>
    `${subtaskDone} of ${subtaskQuantity} ${subtaskWord(subtaskQuantity)}`

export default ({
    'subtask-quantity': subtaskQuantity,
    'subtask-done': subtaskDone,
    children: children,
}: PropsWithChildren) => {
    return (
        <Task>
            <TaskTitle>{children}</TaskTitle>
            <SubtaskInfos>
                {subtaskInfo(subtaskQuantity, subtaskDone)}
            </SubtaskInfos>
        </Task>
    )
}
