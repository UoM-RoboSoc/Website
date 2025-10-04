import styles from './styles.module.css';
import Section from '../Section';
import { homeFeatures } from '@site/src/data';

function Feature({Icon, title, description}) {
  return (
    <div className={`card ${styles.feature}`}>
      <div className="card__header">
        <Icon className={styles.icon}/>
        <h3 className={styles.featureTitle}>{title}</h3>
      </div>
      <div className={`card__body ${styles.desc}`}>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <Section id="Features">
      <div className={styles.title}>
        <h1>What we do</h1>
      </div>
      <div className={styles.container}>
        {homeFeatures.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </Section>
  );
}
