import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Section from '../Section';

export default function ProjectCarousel() {
  return (
    <Section className={styles.section}>
      <div>
        <Link to="/events/2025/09/24/">
          <h1 className={styles.title}>24th September: Visit us at the Fresher's Fair!</h1>
        </Link>
      </div>
    </Section>
  );
}
