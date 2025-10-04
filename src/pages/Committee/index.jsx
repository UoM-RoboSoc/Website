import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import MainCTA from '@site/src/components/MainCTA';
import Section from '@site/src/components/Section';
import CommitteeGrid from '@site/src/components/CommitteeGrid';
import { committee2526, committee2425 } from '@site/src/data/committee';

export default function Main() {
  return (
    <Layout>
      <div className={`hero ${styles.banner}`}>
        <div className="container">
          <h1 className={styles.title}>Our committee</h1>
          <h2 className={styles.subtitle}>Since 2013</h2>
        </div>
      </div>
      <div>
        <Section>
          <h1 className={styles.title}>2025-26</h1>
          <CommitteeGrid list={committee2526}/>
        </Section>
        <Section>
          <h1 className={styles.title}>2024-25</h1>
          <CommitteeGrid list={committee2425}/>
        </Section>
      </div>
    </Layout>
  );
}
