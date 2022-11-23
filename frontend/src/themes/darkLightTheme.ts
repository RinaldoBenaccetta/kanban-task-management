import Colors from './variables/colors'

// @ts-ignore
import DarkLogo from '../assets/img/logo-dark.svg'
// @ts-ignore
import lightLogo from '../assets/img/logo-light.svg'

export default {
    dark: {
        colors: {
            backBackground: Colors.grey.veryDarkGrey,
            frontBackground: Colors.grey.darkGrey,
            text: Colors.white,
            accentLine: Colors.grey.linesDark,
        },
        logo: lightLogo,
    },
    light: {
        colors: {
            backBackground: Colors.grey.lightGrey,
            frontBackground: Colors.white,
            text: Colors.black,
            accentLine: Colors.grey.linesLight,
        },
        logo: DarkLogo,
    },
}
