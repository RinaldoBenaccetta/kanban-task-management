import styled from 'styled-components'
import { PropsThemeType } from '../../../@types/ThemesType'
import DarkModeTransition from '../../../themes/mixins/DarkModeTransition'
import BreakPointMixin from '../../../themes/mixins/BreakPointMixin'

export const BoardContainer = styled.main`
    ${DarkModeTransition};

    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.frontBackground};

    position: fixed;

    top: 64px;

    width: 100%;
    height: 100%;

    z-index: -1;

    display: flex;

    ${BreakPointMixin.tablet`
        top: 81px;
        
       &.left {
          transition: background-color 0.5s, transform 0.2s ease-out, color 0.25s, border-color 1s;
          
          transform: translateX(0);
      }
  
      &.right {
          transition: background-color 0.5s, transform 0.2s ease-out, color 0.25s, border-color 1s;
          
          transform: translateX(261px);
      }
    `};

    ${BreakPointMixin.large`
        top: 98px;
        
      &.right {
          transition: background-color 0.5s, transform 0.2s ease-out, color 0.25s, border-color 1s;
          
          transform: translateX(300px);
      }
    `};
`
