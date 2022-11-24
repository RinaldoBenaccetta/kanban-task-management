import React, { useContext } from 'react'
import styled from 'styled-components'

import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

import typography from '../../themes/typography'

// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import { SelectedBoardContext } from '../../hooks/SelectedBoardProvider'

const ActualBoard = styled.div`
    flex: 1;

    max-width: 100%;

    margin: 21px 0 20px 26px;

    ${typography.heading.l}

    ${BreakPointMixin.tablet`
        font-size: 20px;
        line-height: 25px;
        
        margin: 28px 0 27px 24px;
    `}

    ${BreakPointMixin.large`
        line-height: 30px;
        font-size: 24px;
    `}
`

const ActualBoardChevron = styled.img`
    height: 7px;
    width: 10px;

    margin: 7px 0 5px 8px;

    ${BreakPointMixin.tablet`
        display: none;
    `}
`

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
