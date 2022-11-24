import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'
import { BoardInBoardsType } from '../@types/BoardsType'
import { SelectBoardContextType } from '../@types/SelectBoardContextType'
import { BoardsContext } from './BoardsProvider'

const defaultBoard = { _id: '', name: '' }

/**
 * Usable with useContext.
 */
export const SelectedBoardContext = createContext<SelectBoardContextType>({
    selectedBoard: defaultBoard,
})

/**
 * Provide the selected board.
 * At initialisation, the selected board is the first in list.
 *
 * @param children
 * @constructor
 */
export const SelectedBoardProvider = ({ children }: PropsWithChildren) => {
    const { boardList } = useContext(BoardsContext)

    const boards = boardList.list

    const board = boards.length ? boards[0] : defaultBoard

    const [selectedBoard, setSelectedBoard] = useState(board)

    // https://felixgerschau.com/react-typescript-context/
    const selectBoard = (board: BoardInBoardsType) => {
        setSelectedBoard(board)
    }

    // UseEffect because at first boardList is empty, so we need
    // to change the value while the boardList is not loaded.
    // When the boardList change, useEffect is triggered and
    // select the first board, if there is boards inside the list.
    useEffect(() => {
        if (boards.length) setSelectedBoard(boards[0])
    }, [boardList])

    return (
        <SelectedBoardContext.Provider value={{ selectedBoard, selectBoard }}>
            {children}
        </SelectedBoardContext.Provider>
    )
}
