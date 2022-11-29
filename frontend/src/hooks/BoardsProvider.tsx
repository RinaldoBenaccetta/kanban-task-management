import React, {
    createContext,
    PropsWithChildren,
    useEffect,
    useState,
} from 'react'
import { useQuery } from 'react-query'
import { fetchAllBoards } from '../queries/fetchAllBoards'
import { BoardsType } from '../@types/BoardsType'
import { BoardsContextType } from '../@types/BoardsContextType'

const defaultBoardList = {
    quantity: 0,
    list: [],
}

export const BoardsContext = createContext<BoardsContextType>({
    boardList: defaultBoardList,
})

export const BoardsProvider = ({ children }: PropsWithChildren) => {
    const [boardList, setBoards] = useState(defaultBoardList)

    const queryKey = ['boards']
    const { status, data, error } = useQuery(queryKey, fetchAllBoards)

    useEffect(() => {
        // set default values while fetching.
        // When response, React will set the new value with useEffect.
        const quantity =
            status === 'success' && data.quantity ? data.quantity : 0
        const list = status === 'success' && data.list ? data.list : []

        setBoards({
            quantity: quantity,
            list: list,
        })
    }, [status])

    return (
        <BoardsContext.Provider value={{ boardList }}>
            {children}
        </BoardsContext.Provider>
    )
}
