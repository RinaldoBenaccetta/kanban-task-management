import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import Colors from '../../themes/variables/colors'

// @ts-ignore
import boardIcon from '../../assets/img/icon-board.svg'
import HiddenMixin from '../../themes/mixins/HiddenMixin'
import { SelectedBoardContext } from '../../hooks/SelectedBoardProvider'
import { BoardInBoardListType } from '../../@types/BoardInBoardListType'
import { BoardListContext } from '../../hooks/BoardListProvider'

/**
 * The global shape of the button.
 */
const ButtonShape = css`
    width: 240px;
    height: 48px;

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

    color: ${Colors.primary.mainPurple};

    background: transparent;

    margin: 0;
    padding: 0;

    display: block;

    border: none;
    outline: none;
`

const AddBoardButtonLabel = styled.div`
    position: relative;

    // correction: text appear shifted for unknown reason.
    right: 8px;
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
 * @param boardList
 * @constructor
 */
export const SidebarBoardList = ({}: // boardList,
{
    boardList: { _id: string; name: string }[]
}) => {
    let { selectedBoard } = useContext(SelectedBoardContext)
    const { setSelectedBoard } = useContext(SelectedBoardContext)

    const { boardList } = useContext(BoardListContext)

    const boards = boardList.list

    const list = boards.map((board: BoardInBoardListType) => {
        return (
            <RadioElement key={board._id}>
                <RadioInput
                    name="board"
                    type="radio"
                    value={board._id}
                    checked={board._id === selectedBoard._id}
                    onChange={() => {
                        setSelectedBoard(board)
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
