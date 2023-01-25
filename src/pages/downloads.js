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

        <p>Download the data shown in the Brain Cell Data Viewer here for your
          own analysis. Citation and contact information for the following data
          sets is available in the <a href="/about">About</a> page.</p>

      </ul>

      <ul>
        <li>
          <h3>Nissl Images</h3>
          <p>Nissl images in PNG format. Format: PNG files in a zipped file. Size:  812 MB.
          <br/>
          <a href="https://drive.google.com/file/d/1S2VcjDFFeHUkb2Mc5pSccHAkIR5JKP1F/view?usp=share_link">Download</a>
          </p>
        </li>

        <li>
          <h3>Slide-seq Bead Positions</h3>
          <p>Slide-seq bead positions in the space of nissl images. Format: CSV files in zipped folder. Size: ?? GB.
          <br/>
          <a href="">Download</a>
          </p>
        </li>

        <li>
          <h3>Gene Expression</h3>
          <p>Number of UMI for each gene for all Slide-seq beads. Format: nBeads x nGenes matrix in Anndata format. Size: ?? GB
          <br/>
          <a href="">Download</a>
          </p>
        </li>

        <li>
          <h3>Single Cell Data</h3>
          <p> Average and percent expression of all available genes, for all identified clusters. Format: Two nClusters x nGenes matrices in a single Anndata file. Size: ?? GB
            <br/>
            <a href="">Download</a>
          </p>
        </li>
        <li>
          <h3>Cell Metadata</h3>
          <p>A collection of metadata information for each celltype.</p>
          <ul>
            <li>
              <h3>Celltype Scores</h3>
              <p>A likelihood score, for each celltype, of being present at each bead location.
              Format: nCelltype x nBeads matrix in Anndata format. Size: ?? GB
              <br/>
              <a href="">Download</a>
              </p>
            </li>
            <li>
              <h3>Dissectates</h3>
              <p>A dissectate names, for each celltype, where celltype score is greater than threshold (0.3).
                Format: A zipped folder of CSV files. Size: ?? GB
                <br/>
                <a href="">Download</a>
              </p>
            </li>
            <li>
              <h3>Cell class</h3>
              <p>A broader, assigned cell class for each celltype.
                Format: A zipped folder of CSV files. Size: ?? GB
                <br/>
                <a href="">Download</a>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Downloads`}
      description="Downloads">
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
