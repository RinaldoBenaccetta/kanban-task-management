import { PropsWithChildren } from 'react'

export type BoardTaskPropsType = PropsWithChildren & {
    'subtask-quantity': number
    'subtask-done': number
}
