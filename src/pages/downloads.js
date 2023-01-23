import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="container">
      <ul>
        <h1>Data</h1>
        <p>Download the data shown in the Brain Cell Data Viewer here for your own analysis.</p>
      </ul>

      <ul>
        <li>
          <h3>Nissl Images</h3>
          <p>Brief description and link to Nissl images.</p>
        </li>

        <li>
          <h3>Bead Positions</h3>
          <p>Brief description and link to bead positions.</p>
        </li>

        <li>
          <h3>Gene Expression</h3>
          <p>Brief description and link to gene expression data.</p>
        </li>

        <li>
          <h3>Celltype Scores</h3>
          <p>Brief description and link to celltype scores.</p>
        </li>
      </ul>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Downloads | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

// import React from 'react';
// import  { Redirect } from 'react-router-dom';

// export default function Home() {
//   return <Redirect to='/docs/intro' />;
// }
