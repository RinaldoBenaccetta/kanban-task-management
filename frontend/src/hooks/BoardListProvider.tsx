import React, { createContext, PropsWithChildren, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchAllBoards } from '../queries/fetchAllBoards'

const defaultBoardList = {
    quantity: 0,
    list: [],
}

export const BoardListContext = createContext(defaultBoardList)

export const BoardListProvider = ({ children }: PropsWithChildren) => {
    const queryKey = ['boards']
    const { status, data, error } = useQuery(queryKey, fetchAllBoards)

    // set default values while fetching. When response, React will set the new value.
    const quantity = status === 'success' && data.quantity ? data.quantity : 0
    const list = status === 'success' && data.list ? data.list : []

    const BoardList = BoardListContext

    const [boardList, setBoardList] = useState({
        quantity: quantity,
        list: list,
    })

    return (
        <BoardList.Provider value={{ boardList, setBoardList }}>
            {children}
        </BoardList.Provider>
    )
}
//
// bordList : {
//     quantity: number,
//     list: [string]
// }
