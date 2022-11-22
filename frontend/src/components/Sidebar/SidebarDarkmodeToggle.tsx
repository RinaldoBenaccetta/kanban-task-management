import React from 'react'
import styled, { css } from 'styled-components'

import { DarkLightTheme } from '../../types/DarkLightTheme'

import iconLight from '../../assets/img/icon-light-theme.svg'
import iconDark from '../../assets/img/icon-dark-theme.svg'
import Colors from '../../themes/variables/colors'

const Icon = css`
    display: inline-block;

    background: ${Colors.grey.mediumGrey};

    -webkit-mask-size: cover;
    mask-size: cover;
`

const DarkModeToggleContainer = styled.div`
    padding: 16px 0;
`

const DarkModeToggle = styled.div`
    width: 235px;
    height: 48px;

    background-color: ${(props: DarkLightTheme) =>
        props.theme.colors.backBackground};

    border-radius: 6px;

    margin: 0 auto;
`

const LightIcon = styled.span`
    ${Icon};

    width: 18px;
    height: 18px;

    mask-image: url(${iconLight});
`

const DarkIcon = styled.span`
    ${Icon};

    width: 15px;
    height: 15px;

    mask-image: url(${iconDark});
`

const SwitchInputContainer = styled.div`
    position: relative;
`

const SwitchInput = styled.input`
    appearance: none;

    outline: none;

    width: 40px;
    height: 20px;

    background-color: ${Colors.primary.mainPurple};

    border-radius: 10px;

    &:before {
        content: '';

        position: absolute;

        top: 3px;
        left: 3px;

        background-color: ${Colors.white};

        width: 14px;
        height: 14px;

        border-radius: 50%;

        transition: transform 0.2s ease-in-out;
    }

    //&:checked {
    //}

    &:checked:before {
        transform: translateX(20px);
    }

    //&:not(:checked):before {
    //}
`

export const SidebarDarkmodeToggle = () => {
    return (
        <DarkModeToggleContainer>
            <DarkModeToggle>
                <LightIcon />
                <SwitchInputContainer>
                    <SwitchInput type="checkbox" />
                </SwitchInputContainer>
                <DarkIcon />
            </DarkModeToggle>
        </DarkModeToggleContainer>
    )
}

// <input type="checkbox" id="1">
//     <label htmlFor="1">
//         <span>Tidy the Car</span>
//         <span></span>
//     </label>
