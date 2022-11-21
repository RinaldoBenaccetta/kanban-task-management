import colors from './variables/colors'

export default {
    heading: {
        xl: `
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
        `,
        l: `            
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            `,
        m: `
            font-weight: 700;
            font-size: 15px;
            line-height: 19px;
            `,
        s: `
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            letter-spacing:2.4px;
            color: ${colors.grey.mediumGrey};
            `,
    },
    paragraph: {
        medium: `
                font-size: 13px;
                font-weight: 500;
                line-height: 23px;
                `,
        bold: `
                font-size: 12px;
                font-weight: 700;
                line-height: 15px;
                `,
    },
}
