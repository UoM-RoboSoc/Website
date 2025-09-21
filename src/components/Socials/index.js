import styles from './styles.module.css';
import { socials } from '@site/src/data/socials';
import SocialIcon from '@site/src/components/SocialIcon';

export default function Socials() {
  return (
    <div className={styles.container}>
        {socials.map((props, idx) => (
          <SocialIcon key={idx} {...props} />
        ))}
    </div>
  );
}
