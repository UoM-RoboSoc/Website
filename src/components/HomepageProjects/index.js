import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ProjectList = [
  {
    title: 'The Buggy Project',
    difficulty: 'Beginner',
    projectLead: 'Justin',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        The Buggy Project is an exciting, beginner-friendly initiative where teams will design and build an autonomous quad buggy capable of navigating a maze in a competition.
        Each team will receive a kit containing essential components, including an Arduino, motor driver, chassis, motors, sensors, and other necessary parts.
        Along with comprehensive guides and support materials to assist throughout the project.
      </>
    ),
    contact: 'buggy@uom-robosoc.com',
  },
  {
    title: 'Robot Fighting League (R.F.L)',
    difficulty: 'Beginner',
    projectLead: 'Arjan',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        This is a mechanical and electrical-focused project where members will be supported and guided in making fighting robots of different weight classes from ant weight (150 g) to hobby weight (5.44 kg).
        Building process involves designing, using CAD and general workshop skills. This project is ideal for mechanical-oriented people.
      </>
    ),
    contact: 'rfl@uom-robosoc.com',
  },
  {
    title: 'C.U.B.O',
    difficulty: 'Intermediate',
    projectLead: 'Tara',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        Build autonomous robots capable of solving a Rubik's cube in around 60-70 seconds!
        It offers a great bridge from beginner to advanced projects with a change from wheeled/legged robots into other robotic challenges.
        Work with the Raspberry Pi, get familiar with a circuit board, design in CAD, and assemble intricate mechanical parts.
      </>
    ),
    contact: 'cubo@uom-robosoc.com',
  },
  {
    title: 'Sypders',
    difficulty: 'Intermediate',
    projectLead: 'Dinakar',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        The Sypder Project is based around the development and production of a group of multi-legged robots acting as a swarm to perform remote environmental surverys.
        It is aimed at those who already have some experience with designed and programming embedded systems but may wish to learn or develop more advanced skills like kinematics or ROS in a collaborative, educational environment.
      </>
    ),
    contact: 'sypders@uom-robosoc.com',
  },
  {
    title: 'Artemis III',
    difficulty: 'Advanced',
    projectLead: 'Levon',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        Artemis III aims to develop a drone controlled by hand movements.
        We will use electromyography (EMG), which is the study of electrical activity in muscle tissue.
        We will start by detecting simple muscle activity patterns with a prebuilt emg wristband and translating them into simple commands for a prebuilt drone. Neurotechnology!
      </>
    ),
    contact: 'artemis@uom-robosoc.com',
  },
  {
    title: 'The Arm Project',
    difficulty: 'Advanced',
    projectLead: 'Joshua A',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        Over the past 2 years, Robosoc has been building up a code base to allow our robotic arm to play chess against a human opponent.
        This codebase includes inverse kinematics, trajectory planning, basic AI and computer vision code.
        Now that we have completed the purpose of the arm, we are changing course to make this robotics arm play poker!
      </>
    ),
    contact: 'arm@uom-robosoc.com',
  },
  {
    title: 'Bespoke Projects',
    difficulty: 'Advanced',
    projectLead: 'Joshua B',
    img: '/img/hero-bg.jpg',
    description: (
      <>
        Have your own idea? We are looking for teams and individuals who are already fairly experienced in electronics or coding to apply to take on bespoke projects. These projects can be your suggestion, or potentially a project to work on one of the various unfinished robots the society owns.
      </>
    ),
    contact: 'bespoke@uom-robosoc.com',
  },
];

function LearnMoreButton() {
  return (
    <Link className="button button--secondary button--outline" to="">Learn more</Link>
  );
}

function RegisterButton() {
  return (
    <Link className="button button--secondary button--outline" to="">Register</Link>
  );
}

function Project({projectLead, img, title, difficulty, description, contact}) {
  return (
    <header style={{ '--bg': `url(${useBaseUrl(img)})`}} className={clsx('hero', styles.projectContainer)}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.projectTitle}>
              <Heading as="h1" className="hero__title">{title}</Heading>
            </div>
          </div>
          <div className="col col">
            <p style={{color: `var()`}}>{description}</p>
        <Heading as="h3"><span className={styles.difficulty}>Difficulty:</span> {difficulty}</Heading>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function HomepageProjects() {
  return (
    <div>
      {ProjectList.map((props, idx) => (
        <Project key={idx} {...props} />
      ))}
    </div>
  );
}
