import { ThemeProvider } from 'styled-components';

import { themes } from "../themes/default";
import { useTheme } from '../context/ThemeContext';
import GlobalStyles from './globals';

const Theme = ({ children }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;