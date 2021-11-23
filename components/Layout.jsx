import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Layout.module.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>How About This</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default Layout;
