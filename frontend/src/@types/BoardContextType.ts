import { BoardType } from './BoardType'

export type BoardContextType = {
    board: BoardType
    changeBoard?: (board: BoardType) => void
}
