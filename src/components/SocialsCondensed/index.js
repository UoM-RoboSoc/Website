import styles from './styles.module.css';
import { socials } from '@site/src/data/socials';
import SocialIcon from '@site/src/components/SocialIcon';

export default function Socials() {
  const allowed = ["instagram", "discord", "whatsapp", "linkedin", "uomsu", "email"]

  const filtered = socials.filter(item =>
    allowed.includes(item.id)
  );

  return (
    <div className={styles.container}>
        {filtered.map((props, idx) => (
          <SocialIcon key={idx} {...props} />
        ))}
    </div>
  );
}
