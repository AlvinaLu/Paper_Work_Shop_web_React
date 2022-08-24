import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#67b9f0",
      main: "#18A0FB",
      dark: "#0088e3",
    },
    secondary: {
      light: "#e2dfdf",
      main: "#999999",
      dark: "#7b7a7a",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat"
    ],
  },
});

export default responsiveFontSizes(myTheme);