import React from 'react'
import styled from 'styled-components'

const RadioElement = styled.label`
    display: block;

    position: relative;

    width: 240px;
    height: 48px;

    outline: 1px dotted green;

    border-radius: 0 24px 24px 0;
`

const RadioButton = styled.div`
    display: block;

    position: absolute;
    top: 0;

    width: 240px;
    height: 48px;

    outline: 1px dotted green;

    border-radius: 0 24px 24px 0;

    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`

const RadioInput = styled.input`
    //width: 0;
    height: 0;

    // change adjacent span when checked
    &:checked + div {
        background-color: red;
    }
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
    const checked = '6373af4ff9ad6ddbc86bfaa9'

    const list = boardList.map((board) => {
        return (
            <RadioElement>
                <RadioInput name="board" type="radio" value={board._id} />
                <RadioButton>{board.name}</RadioButton>
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
