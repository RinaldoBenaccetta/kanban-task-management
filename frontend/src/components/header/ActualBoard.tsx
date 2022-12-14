import React from 'react'

// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import {
    ActualBoard,
    ActualBoardButton,
    ActualBoardChevron,
    ActualBoardContainer,
} from './styles/ActualBoard'
import { toggleSidePanel } from '../../features/interface/sidePanelSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export default () => {
    // Use the appSelector instead of the redux useSelectorOne because the app one is typed.
    const sidePanelVisibility = useAppSelector((state) => state.sidePanel.value)
    // Use the appDispatch instead of the redux useDispatch because the app one is typed.
    const dispatch = useAppDispatch()

    // Use the appSelector instead of the redux useSelectorOne because the app one is typed.
    const board = useAppSelector((state) => state.board.value.board)

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
