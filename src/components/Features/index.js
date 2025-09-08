import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import AltitudeIcon from '@material-symbols/svg-400/outlined/altitude.svg';
import VolunteerIcon from '@material-symbols/svg-400/outlined/volunteer_activism.svg';
import ExcitedIcon from '@material-symbols/svg-400/outlined/sentiment_excited.svg';

const FeatureList = [
  {
    title: 'Absolute beginner to advanced',
    Icon: AltitudeIcon,
    description: (
      <>
        Projects are available to those who need to learn the absolute basics, to those with extensive knowledge of the field.
      </>
    ),
  },
  {
    Icon: VolunteerIcon,
    title: 'Affordable robotics access',
    description: (
      <>
        We enable the use of the university’s facilities, can buy components for members where feasible, and have never charged membership fees.
      </>
    ),
  },
  {
    Icon: ExcitedIcon,
    title: 'Meet like-minded people',
    description: (
      <>
        We want to be a place where members can make friends and connections that will stay with them of the rest of their lives.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <Heading as="h3" className={clsx(styles.featureTitle)}><Icon className={styles.featureIcon}/>{title}</Heading>
        <p style={{color: "var(--ifm-color-content-darker)"}}>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
