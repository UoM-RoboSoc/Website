import styles from './styles.module.css';

export default function SocialIcon(props) {
  return (
    <a href={props.to}>
      <img className={styles.icon} src={props.img} />
    </a>
  );
}
