import React from 'react'
import styled from 'styled-components'
import typography from '../../themes/typography'

const Title = styled.div`
    ${typography.heading.s}

    margin: 16px auto 19px 24px;

    padding-top: 16px;

    box-sizing: border-box;
`

export const SidebarTitle = ({ quantity }: { quantity: number }) => {
    return <Title>ALL BOARDS ({quantity})</Title>
}
