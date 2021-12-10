import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from '@/components/ThemeProvider';
import AuthProvider from '@/containers/AuthProvider';
import { AbilityContext, initAbility } from '@/utils/ability';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AbilityContext.Provider value={initAbility}>
        <ThemeProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </AbilityContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
