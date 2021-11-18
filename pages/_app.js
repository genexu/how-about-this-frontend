import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
