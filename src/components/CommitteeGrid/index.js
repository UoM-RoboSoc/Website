import styles from './styles.module.css';
import CommitteeCard from '@site/src/components/CommitteeCard';
import { committee2526 } from '@site/src/data';

export default function Main(props) {
  const committee = props.list;
  return (
    <>
      <div className={styles.committeeGrid}>
        {committee.map((props, idx) => (
          <div className={`card ${styles.card}`}>
            <CommitteeCard key={idx} {...props} />
          </div>
        ))}
      </div>
    </>
  );
}

