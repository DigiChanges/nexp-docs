import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomePageFeatures from '../components/HomePageFeatures';
import HomePageHeader from '../components/HomePageHeader';

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation/Tutorial/NExp">
      <HomePageHeader />
      <main>
        <HomePageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
