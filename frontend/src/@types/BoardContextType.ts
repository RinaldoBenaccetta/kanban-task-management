import { BoardType } from './BoardType'

export type BoardContextType = {
    board: BoardType
    setNewBoard?: (board: BoardType) => void
}
