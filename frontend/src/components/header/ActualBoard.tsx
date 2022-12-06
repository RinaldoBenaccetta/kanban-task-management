import React, { useContext } from 'react'

// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import { SelectedBoardContext } from '../../hooks/SelectedBoardProvider'
import {
    ActualBoard,
    ActualBoardButton,
    ActualBoardChevron,
    ActualBoardContainer,
    ActualBoardLabel,
} from './styles/ActualBoard'

export default () => {
    const { selectedBoard } = useContext(SelectedBoardContext)

    // if there is no board name : place ... instead
    const boardName =
        selectedBoard && selectedBoard.name ? selectedBoard.name : '...'

    return (
        <ActualBoardContainer>
            <ActualBoard>{boardName}</ActualBoard>
            <ActualBoardButton aria-hidden={true}>
                <ActualBoardLabel>{boardName}</ActualBoardLabel>
                <ActualBoardChevron src={chevronDownIcon} alt="Show boards" />
            </ActualBoardButton>
        </ActualBoardContainer>
    )
}
