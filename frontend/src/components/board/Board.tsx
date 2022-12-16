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

    const boardData = useAppSelector((state) => state.board.value.board.data)
    const dispatch = useAppDispatch()

    dispatch(setBoardData(board))

    const sidePanel = useAppSelector((state) => state.sidePanel.value)
    // Retrieve the classes to add based on the value of panelVisibility
    const boardClass = sidePanel ? 'right' : 'left'

    console.log(boardData)

    return (
        <BoardContainer className={boardClass}>
            <BoardColumn>
                <BoardColumnHeader>Column title</BoardColumnHeader>
                <BoardTaskList>
                    <BoardTask subtask-quantity={3} subtask-done={1}>
                        task 1
                    </BoardTask>
                    <BoardTask subtask-quantity={1} subtask-done={1}>
                        task 2
                    </BoardTask>
                    <BoardTask subtask-quantity={4} subtask-done={4}>
                        task 3
                    </BoardTask>
                </BoardTaskList>
            </BoardColumn>
        </BoardContainer>
    )
}
