import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>How About This</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <CssBaseline />
    <Container maxWidth="xl">{children}</Container>
    <Footer />
  </>
);

export default Layout;
