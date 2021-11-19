import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ThemeProvider = ({ ...props }) => <MuiThemeProvider theme={theme} {...props} />;

export default ThemeProvider;
