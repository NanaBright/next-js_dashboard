import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = ({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ 
  ...config,
  semanticTokens: {
    colors: {
          gray: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
    },
      text: {
        default: 'dark',
        _dark: '#fff',
      },
      heroGradientStart: {
        default: '#12032e',
        _dark: '#ffd791',
      },
      heroGradientEnd: {
        default: 'gray.400',
        _dark: '#9f7928',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },

  fonts,
  breakpoints,
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
        
    
})



export default theme
