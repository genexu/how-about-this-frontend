import { useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Layout from '@/components/Layout';
import CommunityList from '@/containers/CommunityList';
import CollectionCard from '@/components/CollectionCard';

export default function Home() {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // console.log(err);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>How About This | Home</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Paper sx={{ marginBottom: 2 }}>
            <TextField variant="outlined" placeholder="Create Collection" fullWidth />
          </Paper>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CollectionCard />
            </Grid>
            <Grid item xs={12}>
              <CollectionCard />
            </Grid>
            <Grid item xs={12}>
              <CollectionCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              mb: 2,
              position: 'relative',
              width: '100%',
              height: 250,
              background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <ins
                className="adsbygoogle"
                style={{ display: 'inline-block', width: 300, height: 250 }}
                data-ad-client="ca-pub-7359508219091811"
                data-ad-slot="5963571330"
              />
            </Box>
          </Box>
          <CommunityList />
        </Grid>
      </Grid>
    </Layout>
  );
}
