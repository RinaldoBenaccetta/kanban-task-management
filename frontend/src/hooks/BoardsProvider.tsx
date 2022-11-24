import React, {
    createContext,
    PropsWithChildren,
    useEffect,
    useState,
} from 'react'
import { useQuery } from 'react-query'
import { fetchAllBoards } from '../queries/fetchAllBoards'
import { BoardListType } from '../@types/BoardListType'

const defaultBoardList = {
    quantity: 0,
    list: [],
}

export const BoardsContext = createContext<BoardListType>(defaultBoardList)

export const BoardsProvider = ({ children }: PropsWithChildren) => {
    const queryKey = ['boards']
    const { status, data, error } = useQuery(queryKey, fetchAllBoards)

    // set default values while fetching.
    // When response, React will set the new value with useEffect.
    const quantity = status === 'success' && data.quantity ? data.quantity : 0
    const list = status === 'success' && data.list ? data.list : []

    const [boardList, setBoardList] = useState({
        quantity: quantity,
        list: list,
    } as BoardListType)

    useEffect(() => {
        setBoardList({
            quantity: quantity,
            list: list,
        })
    }, [status])

    return (
        <BoardsContext.Provider value={{ boardList, setBoardList }}>
            {children}
        </BoardsContext.Provider>
    )
}
