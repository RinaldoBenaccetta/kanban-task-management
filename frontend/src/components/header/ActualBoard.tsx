import React, { useContext } from 'react'

// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import { SelectedBoardContext } from '../../hooks/SelectedBoardProvider'
import { ActualBoard, ActualBoardChevron } from './styles/ActualBoard'

export default () => {
    const { selectedBoard } = useContext(SelectedBoardContext)

    // if there is no board name : place ... instead
    const boardName =
        selectedBoard && selectedBoard.name ? selectedBoard.name : '...'

    return (
        <ActualBoard>
            {boardName}
            <ActualBoardChevron src={chevronDownIcon} alt="Show boards" />
        </ActualBoard>
    )
}
