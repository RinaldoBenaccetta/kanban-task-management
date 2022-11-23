import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { ThemeContext } from '../../themes/darkLightTheme'

import { DarkLightTheme } from '../../types/DarkLightTheme'
import Colors from '../../themes/variables/colors'

// @ts-ignore
import iconLight from '../../assets/img/icon-light-theme.svg'
// @ts-ignore
import iconDark from '../../assets/img/icon-dark-theme.svg'
import hiddenMixin from '../../themes/mixins/HiddenMixin'

const Icon = css`
    display: inline-block;

    background: ${Colors.grey.mediumGrey};

    -webkit-mask-size: cover;
    mask-size: cover;
`

const DarkModeToggle = styled.div`
    width: 235px;
    height: 48px;

    background-color: ${(props: DarkLightTheme) =>
        props.theme.colors.backBackground};

    border-radius: 6px;

    margin: 16px auto 0;

    display: flex;
`

const LightIcon = styled.span`
    ${Icon};

    width: 18px;
    height: 18px;

    mask-image: url(${iconLight});

    margin: auto 23px auto 57px;
`

const DarkIcon = styled.span`
    ${Icon};

    width: 15px;
    height: 15px;

    mask-image: url(${iconDark});

    margin: auto 57px auto 23px;
`

const SwitchInputContainer = styled.div`
    position: relative;

    margin: 14px auto;
`

const SwitchInput = styled.input`
    appearance: none;

    z-index: 10;

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

    &:checked:before {
        transform: translateX(20px);
    }
`

const SwitchLabel = styled.label`
    // Visible only for screen readers
    ${hiddenMixin};

    // don't move the input
    display: block;

    // prevent to catch the click from the input
    pointer-events: none;
`

export const SidebarDarkmodeToggle = () => {
    const windowTheme = useContext(ThemeContext)

    console.log(windowTheme.theme.type)

    return (
        <DarkModeToggle>
            <LightIcon />
            <SwitchInputContainer>
                <SwitchLabel htmlFor="dark-mode-input">Dark mode</SwitchLabel>
                <SwitchInput
                    id="dark-mode-input"
                    type="checkbox"
                    checked={windowTheme.theme.type === 'dark'}
                    onChange={(e) => {
                        windowTheme.switchTheme(windowTheme.theme.type)
                    }}
                />
            </SwitchInputContainer>
            <DarkIcon />
        </DarkModeToggle>
    )
}
