import getURL from '../helpers/getURL'

/**
 * Get all boards and quantity of boards from the API.
 */
export const getBoard = async (id: string) => {
    if (id) {
        const boards = await fetch(`${getURL()}/api/board/${id}`)

        return await boards.json()
    } else
        return {
            status: 'no_id',
            data: null,
            error: null,
        }
}
