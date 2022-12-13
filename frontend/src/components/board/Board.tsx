import React from 'react'

import { getBoard } from '../../queries/getBoard'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBoardData } from '../../features/board/boardSlice'

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

    const boardData = useSelector((state) => state.board.value.board.data)
    const dispatch = useDispatch()

    dispatch(setBoardData(board))

    console.log(boardData)

    return <div>Hello</div>
}
