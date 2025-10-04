import styles from './styles.module.css';
import CommitteeCard from '@site/src/components/CommitteeCard';
import CommitteeGrid from '@site/src/components/CommitteeGrid';
import Section from '@site/src/components/Section';
import Link from '@docusaurus/Link';

export default function Committee(props) {
  const committee = props.list;
  return (
    <>
      <Section id="Committee" className={styles.section}>
        <h1 className={styles.title}>Meet our committee</h1>
        <CommitteeGrid list={committee}/>
        <br/>
        { /* <Link to="/Committee">View past committee ↗</Link> */ }
      </Section>
    </>
  );
}

