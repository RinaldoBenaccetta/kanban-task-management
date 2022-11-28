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
    const queryKey = ['boards']
    const { selectedBoard, selectBoard } = useContext(SelectedBoardContext)

    console.log(selectedBoard)

    // fetch only if there is an id.
    const { status, data, error } = selectedBoard.id
        ? useQuery(queryKey, getBoard(selectedBoard.id))
        : {
              status: null,
              data: null,
              error: null,
          }

    const actualBoard = status === 'success' && data ? data : defaultBoard

    const [board, setBoard] = useState(actualBoard)

    const setNewBoard = (board: BoardType) => setBoard(board)

    useEffect(() => {
        setNewBoard(actualBoard)
    }, [status])

    return (
        <BoardContext.Provider value={{ board, setNewBoard }}>
            {children}
        </BoardContext.Provider>
    )
}
