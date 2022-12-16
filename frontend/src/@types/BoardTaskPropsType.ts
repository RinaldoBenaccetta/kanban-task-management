import { PropsWithChildren } from 'react'

export type BoardTaskPropsType = PropsWithChildren & {
    subtaskQuantity: number
    subtaskDone: number
}
