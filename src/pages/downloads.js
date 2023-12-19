import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
    // <!-- TODO get BIL links -->
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
          <h3>Slide-seq Data</h3>

        <p>3D aligned Slide-seq spatial transcriptomics data with accompanying
        metadata (e.g. gene counts, aligned CCF coordinates, CCF regions).<br/>
            A README text file with additional information and sample code to load.<br/>
            <a href="https://drive.google.com/drive/folders/1fiJDY2HYOasiKOdKSIfk2ol2JTV_wTAl?usp=share_link">Download</a>
            </p>

        </li>

        <li>
            <h3>Single-nuclei (snRNA-seq) Data</h3>

        <p>
            snRNA-seq data including:
        <ul>
            <li>Post-QC single-nuclei gene counts</li>
            <li>Per-library metadata (e.g. dissectate, donor, sex) </li>
            <li>Cell-type clustering annotations</li>
            <li>Cell-type clustering summaries (mean, %Nonzero)</li>
            <li>Genomic reference used</li>
        </ul>
            A README file with additional information is included in the same folder. <br/>
            <a href="https://drive.google.com/drive/folders/16P10yDckZ6Zs2GxPiX4bg7KnH9BthqIx?usp=share_link">Download</a>
          </p>
        </li>

        <li>
          <h3>Spatial Localization of Cell-Types</h3>

          <p>
            An integration of both datasets from above: the mapping of the snRNA-seq clusters onto the Slide-seq beads using RCTD (see manuscript methods).<br/>

        A README file with additional information is included in the same folder. <br/>
<a
          href="https://drive.google.com/drive/folders/19R0_JeKJirmV_k7qUfJmHrx3irCkbqS6?usp=share_link">Download</a>
          </p>

        </li>

            <li>
            <h3>Nissl Images</h3>
            <p>Nissl images in PNG format.
            <br/>
            <a href="https://drive.google.com/file/d/1S2VcjDFFeHUkb2Mc5pSccHAkIR5JKP1F/view?usp=share_link">Download</a><br/>

        Additional raw images are available on the Brain Image Library (BIL) <a href="https://download.brainimagelibrary.org/18/a7/18a7be960ea940f8/">here</a> and <a href="https://download.brainimagelibrary.org/ec/87/ec874ec55e649b4c/">here</a>. 
            
            </p>
            </li>

        {/* <li> */}
        {/*   <h3>Cell Metadata</h3> */}
        {/*   <p>A collection of metadata information for each celltype.</p> */}
        {/*   <ul> */}
        {/*     <li> */}
        {/*       <h3>Celltype Scores</h3> */}
        {/*       <p>A likelihood score, for each celltype, of being present at each bead location. */}
        {/*       Format: nCelltype x nBeads matrix in Anndata format. Size: ?? GB */}
        {/*       <br/> */}
        {/*       <a href="">Download</a> */}
        {/*       </p> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <h3>Dissectates</h3> */}
        {/*       <p>A dissectate names, for each celltype, where celltype score is greater than threshold (0.3). */}
        {/*         Format: A zipped folder of CSV files. Size: ?? GB */}
        {/*         <br/> */}
        {/*         <a href="">Download</a> */}
        {/*       </p> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <h3>Cell class</h3> */}
        {/*       <p>A broader, assigned cell class for each celltype. */}
        {/*         Format: A zipped folder of CSV files. Size: ?? GB */}
        {/*         <br/> */}
        {/*         <a href="">Download</a> */}
        {/*       </p> */}
        {/*     </li> */}
        {/*   </ul> */}
        {/* </li> */}
      </ul>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Downloads`}
      description="Data available for download">
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
