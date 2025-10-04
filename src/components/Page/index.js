import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import MainCTA from '@site/src/components/MainCTA';

export default function Page(props) {
  return (
    <>
      <Layout>
        <div className={`hero ${styles.banner}`}>
          <div className="container">
            <h1 className={styles.title}>{props.title}</h1>
            <h2 className={styles.subtitle}>{props.subtitle}</h2>
            {props.subtitle_extra}
          </div>
        </div>
        {props.content}
      </Layout>
    </>
  );
}
