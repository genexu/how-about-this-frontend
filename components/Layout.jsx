import Head from 'next/head';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Layout = ({ children }) => (
  <>
    <Head>
      <title>How About This</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <CssBaseline />
    <StyledContainer component="main" maxWidth="lg">
      {children}
    </StyledContainer>
  </>
);

export default Layout;
