import React from 'react'
import Logo from '../header/Logo'
import AddTask from '../header/AddTask'
import EditBoard from '../header/EditBoard'
import { getBoard } from '../../queries/getBoard'
import { useLoaderData } from 'react-router-dom'

export async function loader({ params }) {
    const board = await getBoard(params.boardId)
    console.log(board)

    // If contact does not exist, throw an error
    // prevent render an error page with cannot read property of null
    // and give a custom message to the error page. Here : Not Found.
    if (!board) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found test',
        })
    }
    return board
}

export default () => {
    const board = useLoaderData()

    console.log(board)

    return <div>Hello</div>
}
