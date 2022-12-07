import React, { useContext } from 'react'
import { AppValuesContext } from '../../hooks/AppValuesProvider'

// @ts-ignore
import iconShow from '../../assets/img/icon-show-sidebar.svg'
import styled from 'styled-components'
import IconMixin from '../../themes/mixins/IconMixin'
import Colors from '../../themes/variables/colors'
import hiddenMixin from '../../themes/mixins/HiddenMixin'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

const ShowButton = styled.button`
    position: fixed;
    bottom: 32px;
    left: 0;

    border-radius: 0 24px 24px 0;

    background-color: ${Colors.primary.mainPurple};

    border: none;
    outline: none;

    ${hiddenMixin};

    ${BreakPointMixin.tablet`
       
    width: 56px;
    height: 48px;
    
    opacity: 1;
    `}
`

const ShowIcon = styled.span`
    ${IconMixin};

    mask-image: url(${iconShow});

    background: ${Colors.white};

    width: 16px;
    height: 11px;
`

export const SidebarShowButton = () => {
    const { showSidePanel } = useContext(AppValuesContext)

    return (
        <ShowButton onClick={showSidePanel}>
            <ShowIcon />
        </ShowButton>
    )
}
