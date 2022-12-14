import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatchType } from '../@types/AppDispatchType'
import { RootStateType } from '../@types/Rootstate'

/**
 * Export a typed version of useDispatch.
 */
export const useAppDispatch: () => AppDispatchType = useDispatch

/**
 * Export a typed version of useSelector.
 */
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
