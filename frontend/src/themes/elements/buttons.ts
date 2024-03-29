import colors from '../variables/colors'

export default {
    primary: {
        l: `
        width: auto;
        height: 48px;
        
        font-weight: 700;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        
        padding: 15px 24px 14px;
        
        background-color: ${colors.primary.mainPurple};
        
        color: ${colors.white};
        
        border: none;
        outline: none;
        
        opacity: 1;
        
        border-radius: 24px;
        
        transition: background-color 0.15s, color 0.15s;
        
          @media (hover: hover) {
            &:hover {
              background-color: ${colors.primary.mainPurpleHover};
              cursor: pointer;
            }
          }
        `,
        s: `
        `,
    },
    secondary: `
    `,
    destructive: `
    `,
}
