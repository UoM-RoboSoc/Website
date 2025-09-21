import styles from './styles.module.css';
import CommitteeCard from '@site/src/components/CommitteeCard';
import Section from '@site/src/components/Section';
import { committee } from '@site/src/data';

export default function Committee() {
  return (
    <>
      <Section>
        <h1 className={styles.title}>Meet our committee</h1>
        <div className={styles.committeeGrid}>
          {committee.map((props, idx) => (
            <div className={`card ${styles.card}`}>
            <CommitteeCard key={idx} {...props} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

