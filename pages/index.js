import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Home() {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>How About This | Home</title>
      </Head>
      <div className="ads" style={{ width: 300, height: 250, backgroundColor: '#DFDFDF' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', width: 300, height: 250 }}
          data-ad-client="ca-pub-7359508219091811"
          data-ad-slot="5963571330"
        />
      </div>
    </Layout>
  );
}
