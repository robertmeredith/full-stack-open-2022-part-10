import { Platform } from "react-native"

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    white: 'white',
    lightBackground: '#e1e4e8',
    primary: '#0366d6',
    dark: '#24292e',
    danger: '#d73a4a'
  },
  fontSizes: {
    small: 10,
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  padding: {
    normal: 12
  },
}

export default theme
