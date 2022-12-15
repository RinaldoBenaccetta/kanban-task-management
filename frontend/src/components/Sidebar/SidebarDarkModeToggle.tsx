import React, { useContext } from 'react'
import styled from 'styled-components'

import { PropsThemeType } from '../../@types/ThemesType'
import Colors from '../../themes/variables/colors'

// @ts-ignore
import iconLight from '../../assets/img/icon-light-theme.svg'
// @ts-ignore
import iconDark from '../../assets/img/icon-dark-theme.svg'
import hiddenMixin from '../../themes/mixins/HiddenMixin'
import DarkModeTransition from '../../themes/mixins/DarkModeTransition'
import { ThemeContext } from '../../contexts/ThemeContextProvider'
import IconMixin from '../../themes/mixins/IconMixin'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

const DarkModeToggle = styled.div`
    width: 235px;
    height: 48px;

    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.backBackground};

    border-radius: 6px;

    margin: 16px auto 0;

    display: flex;

    ${DarkModeTransition};

    ${BreakPointMixin.large`
        width: 251px;
    `}
`

const LightIcon = styled.span`
    ${IconMixin};

    width: 18px;
    height: 18px;

    mask-image: url(${iconLight});

    margin: auto 23px auto 57px;
`

const DarkIcon = styled.span`
    ${IconMixin};

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

    transition: background-color 0.15s;

    @media (hover: hover) {
        &:hover {
            background-color: ${Colors.primary.mainPurpleHover};

            cursor: pointer;
        }
    }

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

/**
 * The toggle for the dark mode.
 * It is a styled checkbox.
 *
 * @constructor
 */
export const SidebarDarkModeToggle = () => {
    const { selectedTheme, toggleDarkMode } = useContext(ThemeContext)

    return (
        <DarkModeToggle>
            <LightIcon />
            <SwitchInputContainer>
                <SwitchLabel htmlFor="dark-mode-input">Dark mode</SwitchLabel>
                <SwitchInput
                    id="dark-mode-input"
                    type="checkbox"
                    checked={selectedTheme === 'dark'}
                    onChange={() => {
                        if (toggleDarkMode) toggleDarkMode()
                    }}
                />
            </SwitchInputContainer>
            <DarkIcon />
        </DarkModeToggle>
    )
}
