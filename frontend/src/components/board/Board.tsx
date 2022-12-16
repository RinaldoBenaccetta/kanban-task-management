import React from 'react'

import { getBoard } from '../../queries/getBoard'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { setBoardData } from '../../features/board/boardSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { BoardContainer } from './styles/Board'
import BoardColumn from './BoardColumn'
import BoardColumnHeader from './BoardColumnHeader'
import BoardTaskList from './BoardTaskList'
import BoardTask from './BoardTask'
import {
    BoardType,
    ColumnType,
    SubTaskType,
    TaskType,
} from '../../@types/BoardType'

export async function loader({ params }: LoaderFunctionArgs) {
    const board = await getBoard(params.boardId)

    // If board does not exist, throw an error
    // prevent render an error page with cannot read property of null
    // and give a custom message to the error page. Here : Not Found.
    if (!board) {
        throw new Response('', {
            status: 404,
            statusText: 'Board not found',
        })
    }
    return board
}

export default () => {
    const board = useLoaderData()

    const boardData: BoardType | null = useAppSelector(
        (state) => state.board.value.board.data
    )
    const dispatch = useAppDispatch()

    console.log(boardData)

    dispatch(setBoardData(board))

    const sidePanel = useAppSelector((state) => state.sidePanel.value)
    // Retrieve the classes to add based on the value of panelVisibility
    const boardClass = sidePanel ? 'right' : 'left'

    const columnsData =
        boardData && 'columns' in boardData ? boardData.columns : []

    // const columnsData = boardData.columns as ColumnType[]

    const countCompletedSubtasks = (subtasks: SubTaskType[]) => {
        return subtasks.reduce((count: number, subTask: SubTaskType) => {
            return subTask.isCompleted ? count + 1 : count
        }, 0)
    }

    /**
     * Build all the tasks of one column in a board.
     * @param taskList
     */
    const tasksPanels = (taskList: TaskType[]) => {
        return taskList.map((task: TaskType) => {
            const subtasks = task.subtasks

            const subtaskQuantity = subtasks.length
            const subtaskDone = countCompletedSubtasks(subtasks)

            return (
                <BoardTask
                    subtaskQuantity={subtaskQuantity}
                    subtaskDone={subtaskDone}
                >
                    {task.title}
                </BoardTask>
            )
        })
    }

    /**
     * Build all the columns of the board.
     */
    const columnsPanels = columnsData?.map((column: ColumnType) => {
        const { name, tasks } = column

        return (
            <BoardColumn>
                <BoardColumnHeader>{name}</BoardColumnHeader>
                <BoardTaskList>{tasksPanels(tasks)}</BoardTaskList>
            </BoardColumn>
        )
    })

    return (
        <BoardContainer className={boardClass}>{columnsPanels}</BoardContainer>
    )
}
