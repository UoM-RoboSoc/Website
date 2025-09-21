import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import MainCTA from '@site/src/components/MainCTA';

export default function ProjectPage(project) {
  const { aboutPage: Page, ...props} = project;

  return (
    <>
      <Layout>
        <div className={`hero ${styles.banner}`}>
          <div className="container">
            <h1 className={styles.title}>{project.title}</h1>
            <h2 className={styles.subtitle}>{project.shortDescription}</h2>
          </div>
        </div>
        <ul className="tabs tabs--block">
          <li className="tabs__item tabs__item--active">About</li>
        </ul>
        <p><br/></p>
        <div>
          <div className="container">
            <Page />
          </div>
        </div>
        <MainCTA
          title={`Join ${project.title}!`}
          contact={project.contact}/>
      </Layout>
    </>
  );
}
