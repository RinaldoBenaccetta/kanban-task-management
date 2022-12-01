import getURL from '../helpers/getURL'
import { BoardsType } from '../@types/BoardsType'

/**
 * Get all boards and quantity of boards from the API.
 */
export const fetchAllBoards = async (): Promise<BoardsType> => {
    const boards = await fetch(`${getURL()}/api/boards`)

    return boards.json()
}
