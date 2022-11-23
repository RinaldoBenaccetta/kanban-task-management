import React, { useContext } from 'react'
import styled from 'styled-components'
import typography from '../../themes/typography'
import { BoardListContext } from '../../hooks/BoardListProvider'

const Title = styled.div`
    ${typography.heading.s}

    margin: 16px auto 19px 24px;

    box-sizing: border-box;
`

export const SidebarTitle = () => {
    const { boardList, setBoardList } = useContext(BoardListContext)

    return <Title>ALL BOARDS ({boardList.quantity})</Title>
}
