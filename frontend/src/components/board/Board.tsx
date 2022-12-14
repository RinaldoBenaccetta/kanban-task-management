import React from 'react'

import { getBoard } from '../../queries/getBoard'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { setBoardData } from '../../features/board/boardSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

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

    console.log(boardData)

    return <div>Hello</div>
}
