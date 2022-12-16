import styled from 'styled-components'
import { PropsThemeType } from '../../../@types/ThemesType'
import DarkModeTransition from '../../../themes/mixins/DarkModeTransition'
import BreakPointMixin from '../../../themes/mixins/BreakPointMixin'

export const BoardContainer = styled.main`
    ${DarkModeTransition};

    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.backBackground};

    position: fixed;

    z-index: 0;

    top: 64px;

    width: 100%;
    height: calc(100% - 64px);

    display: flex;

    overflow: auto;

    ${BreakPointMixin.tablet`
        top: 81px;
        height: calc(100% - 81px);
        
       &.left {
          transition: background-color 0.5s, transform 0.2s ease-out, color 0.25s, border-color 1s;
          
          transform: translateX(0);
      }
  
      &.right {
          transition: background-color 0.5s, transform 0.2s ease-out, width 0.2s ease-out, color 0.25s, border-color 1s;
          
          width: calc(100% - 261px);
          
          transform: translateX(261px);
      }
    `};

    ${BreakPointMixin.large`
        top: 97px;
        height: calc(100% - 97px);
        
      &.right {
          transition: background-color 0.5s, transform 0.2s ease-out, width 0.2s ease-out, color 0.25s, border-color 1s;
          
          width: calc(100% - 300px);
          
          transform: translateX(300px);
      }
    `};
`
