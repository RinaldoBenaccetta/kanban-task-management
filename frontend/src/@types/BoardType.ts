export type SubTaskType = {
    title: string
    isCompleted: boolean
}

export type TaskType = {
    title: String
    description: String
    status: String
    subtasks: SubTaskType[]
}

export type ColumnType = {
    name: string
    tasks: TaskType[]
}

export type BoardType = {
    name: string
    columns?: ColumnType[]
}
