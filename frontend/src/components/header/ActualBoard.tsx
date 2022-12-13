import React from 'react'

// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import {
    ActualBoard,
    ActualBoardButton,
    ActualBoardChevron,
    ActualBoardContainer,
} from './styles/ActualBoard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidePanel } from '../../features/interface/sidePanelSlice'

export default () => {
    const sidePanelVisibility = useSelector((state) => state.sidePanel.value)
    const dispatch = useDispatch()

    const board = useSelector((state) => state.board.value.board)

    const selectedBoard = board.selected

    // if there is no board name : place ... instead
    const boardName =
        selectedBoard && selectedBoard.name ? selectedBoard.name : '...'

    return (
        <ActualBoardContainer>
            <ActualBoard>{boardName}</ActualBoard>
            <ActualBoardButton
                aria-hidden={true}
                onClick={() => dispatch(toggleSidePanel())}
            >
                {boardName}
                <ActualBoardChevron
                    src={chevronDownIcon}
                    $panelVisibility={sidePanelVisibility}
                />
            </ActualBoardButton>
        </ActualBoardContainer>
    )
}
