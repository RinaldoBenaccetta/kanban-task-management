import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'

import Colors from '../../themes/variables/colors'

// @ts-ignore
import boardIcon from '../../assets/img/icon-board.svg'
import HiddenMixin from '../../themes/mixins/HiddenMixin'
import { SelectedBoardContext } from '../../hooks/SelectedBoardProvider'
import { BoardInBoardsType } from '../../@types/BoardsType'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import { AppValuesContext } from '../../hooks/AppValuesProvider'
import isPhoneScreen from '../../helpers/isPhoneScreen'
import { useDispatch, useSelector } from 'react-redux'
import { setActualBoard, setBoardData } from '../../features/board/boardSlice'

/**
 * The global shape of the button.
 */
const ButtonShape = css`
    width: 240px;
    height: 48px;

    ${BreakPointMixin.large`
        width: 276px;
    `}

    border-radius: 0 24px 24px 0;
`

const ButtonFont = css`
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`

/**
 * Fix the height of the label of the button that appear shifted.
 */
const ButtonLabelHeightFix = css`
    position: relative;

    bottom: 2px;
`

const RadioFieldset = styled.fieldset`
    margin: 0;
    padding: 0;

    border: none;

    legend {
        ${HiddenMixin};

        display: block;
    }
`

const RadioElement = styled.label`
    ${ButtonShape};

    display: block;

    position: relative;

    width: 240px;
    height: 48px;

    border-radius: 0 24px 24px 0;
`

const RadioButton = styled.div`
    ${ButtonShape};

    ${ButtonFont};

    display: block;

    position: absolute;
    top: 0;

    padding: 16px 0 16px 24px;

    box-sizing: border-box;

    transition: background-color 0.15s, color 0.15s;

    @media (hover: hover) {
        &:hover {
            background-color: ${Colors.grey.lightGrey};

            color: ${Colors.primary.mainPurple};

            cursor: pointer;

            span:first-child {
                transition: background-color 0.15s;

                background: ${Colors.primary.mainPurple};
            }
        }
    }
`

const RadioInput = styled.input`
    ${HiddenMixin};

    // change adjacent span when checked
    &:checked + div {
        background-color: ${Colors.primary.mainPurple};

        color: ${Colors.white};

        span:first-of-type {
            background: ${Colors.white};
        }
    }
`

const RadioButtonIcon = styled.span`
    width: 16px;
    height: 16px;

    margin-right: 12px;

    mask-image: url(${boardIcon});

    display: inline-block;

    background: ${Colors.grey.mediumGrey};

    -webkit-mask-size: cover;
    mask-size: cover;
`

const RadioButtonName = styled.span`
    ${ButtonLabelHeightFix}
`

const AddBoardButton = styled.button`
    ${ButtonShape};

    ${ButtonFont};

    text-align: left;

    color: ${Colors.primary.mainPurple};

    background: transparent;

    margin: 0;
    padding: 0;

    display: block;

    border: none;
    outline: none;

    transition: background-color 0.15s, color 0.15s;

    @media (hover: hover) {
        &:hover {
            background-color: ${Colors.primary.mainPurpleHover};

            color: ${Colors.white};

            cursor: pointer;

            span:first-child {
                transition: background-color 0.15s;

                background: ${Colors.white};
            }
        }
    }
`

const AddBoardButtonLabel = styled.div`
    padding-left: 24px;
`

const AddBoardText = styled.span`
    ${ButtonLabelHeightFix}
`

const AddBoardIcon = styled(RadioButtonIcon)`
    background: ${Colors.primary.mainPurple};
`

/**
 * The list of boards.
 *
 * @constructor
 */
export const SidebarBoardList = () => {
    // const { selectedBoard, selectBoard } = useContext(SelectedBoardContext)

    const { hideSidePanel } = useContext(AppValuesContext)

    // const { boardList } = useContext(BoardsContext)

    // const boards = boardList.list

    // const boards = useSelector((state) => state.board.value.boards)

    const appData = useSelector((state) => state.board.value)

    const dispatch = useDispatch()

    const boardList = appData.boards.list

    const selectedBoard = appData.board.selected

    /**
     * This set the first board as default selected one.
     *
     * UseEffect because at first boardList is empty, so we need
     * to change the value when the boardList is not loaded.
     * When the boardList change, useEffect is triggered and
     * select the first board, if there is boards inside the list.
     */
    useEffect(() => {
        // if (boardList.length && selectBoard) selectBoard(boardList[0])
        if (boardList.length) dispatch(setActualBoard(boardList[0]))
    }, [boardList])

    const getBoardIdAndName = (id: string) => {
        return boardList.filter((board) => board._id === id)[0]
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (hideSidePanel) {
            if (isPhoneScreen()) setTimeout(hideSidePanel, 1000)

            if (boardList.length)
                dispatch(setActualBoard(getBoardIdAndName(event.target.value)))

            // selectBoard(getBoardIdAndName(event.target.value))
        }
    }

    // const list = boards.map((board: BoardInBoardsType) => {
    const list = boardList.map((board: BoardInBoardsType) => {
        // const boards = useSelector((state) => state.board.value)
        // const dispatch = useDispatch()
        //
        // console.log(boards.boards.list)

        return (
            <RadioElement key={board._id}>
                <RadioInput
                    name="board"
                    type="radio"
                    value={board._id}
                    // checked={board._id === selectedBoard._id}
                    checked={board._id === selectedBoard._id}
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
                <RadioButton>
                    <RadioButtonIcon aria-hidden="true" />
                    <RadioButtonName>{board.name}</RadioButtonName>
                </RadioButton>
            </RadioElement>
        )
    })

    return (
        <div>
            <RadioFieldset>
                <legend>Choose a board :</legend>
                {list}
            </RadioFieldset>
            <AddBoardButton>
                <AddBoardButtonLabel>
                    <AddBoardIcon />
                    <AddBoardText>+ Create New Board</AddBoardText>
                </AddBoardButtonLabel>
            </AddBoardButton>
        </div>
    )
}
