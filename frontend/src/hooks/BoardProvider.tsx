import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'
import { BoardContextType } from '../@types/BoardContextType'
import { BoardType } from '../@types/BoardType'
import { SelectedBoardContext } from './SelectedBoardProvider'
import { useQuery } from 'react-query'
import { getBoard } from '../queries/getBoard'

const defaultBoard = {
    name: '',
}

export const BoardContext = createContext<BoardContextType>({
    board: defaultBoard,
})

export const BoardProvider = ({ children }: PropsWithChildren) => {
    const [board, setBoard] = useState(defaultBoard)

    const setNewBoard = (board: BoardType) => setBoard(board)

    const { selectedBoard, selectBoard } = useContext(SelectedBoardContext)

    const id = selectedBoard._id

    const { status, data, error } = useQuery(
        // when id change : re fetch
        ['board', id],
        async () => await getBoard(id)
    )

    useEffect(() => {
        if (status === 'success' && data) {
            setNewBoard(data)
        }
    }, [status])

    return (
        <BoardContext.Provider value={{ board, setNewBoard }}>
            {children}
        </BoardContext.Provider>
    )
}
