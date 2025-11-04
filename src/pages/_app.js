import Theme from '../styles/theme';
import { ThemeContextProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeContextProvider>
    </>
  );
}
 