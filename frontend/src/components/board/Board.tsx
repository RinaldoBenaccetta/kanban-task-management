import React from 'react'

import { getBoard } from '../../queries/getBoard'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBoard } from '../../features/board/boardSlice'

export async function loader({ params }: LoaderFunctionArgs) {
    const board = await getBoard(params.boardId)

    // console.log(board)

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

    // const selectedBoard = useSelector((state) => state.board.value)

    const selectedBoard = useSelector((state) => state.board.value)
    const dispatch = useDispatch()

    dispatch(setBoard(board))

    console.log(selectedBoard)

    return <div>Hello</div>
}
