import getURL from '../helpers/getURL'

/**
 * Get all boards and quantity of boards from the API.
 */
export const fetchAllBoards = async () => {
    const boards = await fetch(`${getURL()}/api/boards`)

    return boards.json()
}
