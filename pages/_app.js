import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from '@/components/ThemeProvider';
import AuthProvider from '@/containers/AuthProvider';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
