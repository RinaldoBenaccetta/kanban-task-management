import colors from '../variables/colors'

export default {
    primary: {
        l: `
        width: auto;
        height: 48px;
        
        padding: 15px 24px 14px;
        
        background-color: ${colors.primary.mainPurple};
        
        color: ${colors.white};
        
        border: none;
        outline: none;
        
        opacity: 1;
        
        border-radius: 24px;
        
          @media (hover: hover) {
            &:hover {
              background-color: ${colors.primary.mainPurpleHover};
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
