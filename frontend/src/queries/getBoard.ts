import getURL from '../helpers/getURL'

/**
 * Get all boards and quantity of boards from the API.
 */
export const getBoard = async (id: string) => {
    const boards = await fetch(`${getURL()}/api/boards:${id}`)

    return boards.json()
}
