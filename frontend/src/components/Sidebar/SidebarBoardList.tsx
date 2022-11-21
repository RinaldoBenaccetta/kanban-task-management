import React from 'react'
import styled from 'styled-components'

import Colors from '../../themes/variables/colors'

// @ts-ignore
import boardIcon from '../../assets/img/icon-board.svg'

const RadioElement = styled.label`
    display: block;

    position: relative;

    width: 240px;
    height: 48px;

    border-radius: 0 24px 24px 0;
`

const RadioButton = styled.div`
    display: block;

    position: absolute;
    top: 0;

    width: 240px;
    height: 48px;
    //height: 16px;

    padding: 16px 0 16px 24px;

    box-sizing: border-box;

    border-radius: 0 24px 24px 0;

    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`

const RadioInput = styled.input`
    width: 0;
    height: 0;

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
    position: relative;

    bottom: 2px;
`

/**
 * The list of boards.
 *
 * @param boardList
 * @constructor
 */
export const SidebarBoardList = ({
    boardList,
}: {
    boardList: { _id: string; name: string }[]
}) => {
    // todo: make this dynamic
    // const selectedBoard = '6373af4ff9ad6ddbc86bfaa9'

    const list = boardList.map((board) => {
        return (
            <RadioElement key={board._id}>
                <RadioInput
                    name="board"
                    type="radio"
                    value={board._id}
                    // checked={board._id === selectedBoard}
                />
                <RadioButton>
                    <RadioButtonIcon />
                    <RadioButtonName>{board.name}</RadioButtonName>
                </RadioButton>
            </RadioElement>
        )
    })

    return (
        <div>
            <div>{list}</div>
            <button>+ Create New Board</button>
        </div>
    )
}
