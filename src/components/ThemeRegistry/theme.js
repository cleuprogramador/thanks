
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';



// Create a theme instance.
const theme = createTheme({
  palette: {
    primary:{
        main:'#000'
    } ,
    secondary: {
        main:'#ffc709',
        light:'#fff5dc'
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#ffcf81',
      dark: '#000',
    },
    succes:{
      main:"#5bc041"
    },
    whiteMask:{
      main:'rgba(255,255,255,0.9)',
      solid:'#ffffff',
    },
    blackMask:{
      light:'rgba(0,0,0,0.2)',
      main:'rgba(0,0,0,0.5)'
    },
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
  },
});

export default theme;