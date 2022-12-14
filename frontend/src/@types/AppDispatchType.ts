import { store } from '../app/store'

/**
 * export the RootState type for using without typescript errors.
 */
export type AppDispatchType = typeof store.dispatch
