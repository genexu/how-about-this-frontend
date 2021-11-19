import ThemeProvider from '@/components/ThemeProvider';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
