import React from 'react';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

export default function Hello() {
  return (
    <Layout>
      <div className={`${styles.container}`}>
        <iframe
          src="https://forms.gle/bFQgeNVwAF9L2EKv8"
          width="100%"
          height="100%"
          className={styles.iframe}
        />
      </div>
    </Layout>
  );
}
