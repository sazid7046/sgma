import { createTheme } from '@mui/material/styles';

const arcWhite =  "#E9EAED"
const arcOrange = "#FF385C";

export default createTheme({
  palette: {
    common: {
      blue: arcWhite,
      orange: arcOrange
    },
    primary: {
      main: arcWhite
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontWeight: 500,
      fontSize: "1.1rem",
      letterSpacing: '2px',
      textTransform: 'none',
      color: "#27292A",
    },
    h1:{
      fontSize: '36px',
      fontWeight: 400,
      color: '#000000',
    },    
    h6:{
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 400
    },
    body1:{
      fontSize: '18px',
      color: '#515151',
      fontWeight: 400,
    },

  }
});
