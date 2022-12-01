import { BoardType } from './BoardType'

// https://felixgerschau.com/react-typescript-context/
export type BoardContextType = {
    board: BoardType
    setNewBoard?: (board: BoardType) => void
}
