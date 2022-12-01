import styled from 'styled-components'
import typography from '../../../themes/typography'
import BreakPointMixin from '../../../themes/mixins/BreakPointMixin'

export const ActualBoard = styled.div`
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

export const ActualBoardChevron = styled.img`
    height: 7px;
    width: 10px;

    margin: 7px 0 5px 8px;

    ${BreakPointMixin.tablet`
        display: none;
    `}
`
