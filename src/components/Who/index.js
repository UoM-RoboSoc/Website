import styles from './styles.module.css';
import RoboTitle from '/assets/roboTitle.svg';
import Section from '../Section';

export default function Who(props) {
  return (
    <Section id="Who">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            We are <br/><RoboTitle className={styles.titleIcon}/>
          </h2>
        </div>
        <div className={`card`}>
          <div className={`card__body`}>
            ROBOSOC is a student-led robotics society based at the University of Manchester, which aims to encourage students of all levels to get
            involved in robotics. Since 2013, the Robotics Society offers a great opportunity to develop your practical
            skills outside of the course curriculum; you'll be able to build exciting projects with state-of-the-art
            technology in a relaxed environment.
          </div>
          <div className={`card__footer`}>
            <button className="button button--primary button--outline">Learn more about us</button>
            </div>
        </div>
      </div>
    </Section>
  );
}
