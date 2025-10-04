import styles from './styles.module.css';
import RoboTitle from '/assets/roboTitle.svg';
import Section from '../Section';
import Link from '@docusaurus/Link';

export default function Who(props) {
  return (
    <Section id="About">
      <h1 className={styles.title}>
        We are <RoboTitle className={styles.titleIcon}/>
      </h1>
      ROBOSOC is a student-led robotics society based at the University of Manchester, which aims to encourage students of all levels to get
      involved in robotics. Since 2013, the Robotics Society offers a great opportunity to develop your practical
      skills outside of the course curriculum; you'll be able to build exciting projects with state-of-the-art
      technology in a relaxed environment.
    </Section>
  );
  // <button className="button button--primary button--outline">Learn more about us</button>
}
