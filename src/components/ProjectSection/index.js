import styles from './styles.module.css';
import Section from '@site/src/components/Section';
import RegisterButton from '@site/src/components/RegisterButton';
import ProjectCarousel from '@site/src/components/ProjectCarousel';
import Link from '@docusaurus/Link';

export default function Main() {
  return (
    <Section id="Projects">
      <div className={styles.title}>
        <h1>See the <span className="text-primary">Projects</span> we offer</h1>
      </div>

      <ProjectCarousel/>

      <br/>
      <Link to="/Register">Register for a project ↗</Link>
    </Section>
  )
}
