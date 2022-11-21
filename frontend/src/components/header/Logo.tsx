import React from 'react'
import styled from 'styled-components'

import { DarkLightTheme } from '../../types/DarkLightTheme'

// @ts-ignore
import mobileLogoIcon from '../../assets/img/logo-mobile.svg'

import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

const LogoContainer = styled.div`
    width: 56px;
    height: 100%;

    ${BreakPointMixin.tablet`
        width: 261px;
        
        border-right: 1px solid ${(props: DarkLightTheme) =>
            props.theme.colors.accentLine}
    `}

    ${BreakPointMixin.large`
        width: 300px;
    `}
`

const Logo = styled.div`
    width: 24px;
    height: 25px;

    margin: 20px 0 19px 16px;

    background-image: url(${mobileLogoIcon});
    background-repeat: no-repeat;

    ${BreakPointMixin.tablet`
        width: 153px;
        height: 25px;
        
        margin: 28px auto auto 24px;
        
        background-image: url(${(props: DarkLightTheme) => props.theme.logo});
    `}

    ${BreakPointMixin.large`
        margin: 33px auto auto 34px;
    `}
`

export default () => {
    return (
        <LogoContainer>
            <Logo />
        </LogoContainer>
    )
}
