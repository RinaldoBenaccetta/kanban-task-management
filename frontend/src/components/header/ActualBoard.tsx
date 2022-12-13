import React, { useContext } from 'react'

// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import {
    ActualBoard,
    ActualBoardButton,
    ActualBoardChevron,
    ActualBoardContainer,
} from './styles/ActualBoard'
import { AppValuesContext } from '../../hooks/AppValuesProvider'
import { useSelector } from 'react-redux'

export default () => {
    const { appValues, toggleSidePanel } = useContext(AppValuesContext)
    const sidePanelVisibility = appValues.sidePanelVisibility

    const appData = useSelector((state) => state.board.value)

    const selectedBoard = appData.board.selected

    // if there is no board name : place ... instead
    const boardName =
        selectedBoard && selectedBoard.name ? selectedBoard.name : '...'

    return (
        <ActualBoardContainer>
            <ActualBoard>{boardName}</ActualBoard>
            <ActualBoardButton aria-hidden={true} onClick={toggleSidePanel}>
                {boardName}
                <ActualBoardChevron
                    src={chevronDownIcon}
                    $panelVisibility={sidePanelVisibility}
                />
            </ActualBoardButton>
        </ActualBoardContainer>
    )
}
