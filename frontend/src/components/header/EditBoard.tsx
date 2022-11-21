import React from 'react'
import styled from 'styled-components'

import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

//@ts-ignore
import editBoardIcon from '../../assets/img/icon-vertical-ellipsis.svg'

const EditBoardButton = styled.button`
    width: 36px;
    height: 32px;

    margin: 16px 0;

    ${BreakPointMixin.tablet`
        height: 48px;
        width: 53px;
    `}

    ${BreakPointMixin.large`
        width: 61px;
        
        margin: 20px auto 28px auto;
    `}
  
    border-radius: 0;

    background: transparent;

    border: none;
    outline: none;
`

const EditBoardButtonIcon = styled.img`
    height: 16px;

    margin: auto;

    ${BreakPointMixin.tablet`
        height: 20px;
    `}
`

export default () => {
    return (
        <EditBoardButton>
            <EditBoardButtonIcon src={editBoardIcon} alt="Edit board" />
        </EditBoardButton>
    )
}
