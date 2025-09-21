import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import RoboLogo from '/assets/roboLogo.svg';
import RoboTitle from '/assets/roboTitle.svg';
import RegisterButton from '../RegisterButton';
import SocialsCondensed from '@site/src/components/SocialsCondensed';

export default function Hero() {
  return (
    <header className={`hero ${styles.banner}`}>
      <div className={`container ${styles.container}`}>
        <RoboLogo className={styles.logo}/>
        <h1 className={styles.title}>
          <RoboTitle className={styles.roboTitle}/>
        </h1>
        <h2 className={styles.subtitle}>Manchester Robotics Society</h2>
        <SocialsCondensed />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#Projects">
            See our projects
          </Link>
          <RegisterButton
            className="button button--secondary button--outline button--lg"/>
        </div>
        <Link to="#Who">
          <img src="/assets/down-arrows.gif" width="40" />
        </Link>
      </div>
    </header>
  );
}
