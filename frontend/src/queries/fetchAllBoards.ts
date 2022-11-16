/**
 * Get all boards and quantity of boards from the API.
 */
export const fetchAllBoards = async () => {
    const boards = await fetch('http://localhost:3001/api/boards')

    return boards.json()
}
