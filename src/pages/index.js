import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageProjects from '@site/src/components/HomepageProjects';
import HomepageCommittee from '@site/src/components/HomepageCommittee';
import Logo from '@site/static/img/logo.svg';
import FormsIcon from '@material-symbols/svg-400/outlined/list.svg';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>

      <div className="container">
        <Heading as="h1" className="hero__title">
          Get involved<br/>in <b>robotics</b>
        </Heading>
        <div class="row">
          <div class="col col--3">
          </div>
          <div class="col col--6">
            <Heading as="p" className="hero__subtitle">
              Based at the University of Manchester, our student-led robotics society encourages those of all levels to develop their skills.
            </Heading>
          </div>
          <div class="col col--3">
          </div>
        </div>
        <div className={styles.heroButton}>
          <Link
            className="button button--primary button--lg"
            to="#projects">
            See our projects
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectSection() {
  return (
    <header className={clsx('hero', styles.projectsSection)} id="projects">
      <div className="container" >
        <Logo className={styles.projectsSectionLogo} role="img"/>
        <Heading as="h1" className="hero__title" >
          <p className={styles.projectsSectionTitle}><b>Projects</b></p>
        </Heading>
        <HomepageProjects />
      </div>
    </header>
  );
}

function RegisterSection() {
  return (
    <header className={clsx('hero')} id="register">
      <div className="container" >
        <p>Interested?</p>
        <Heading as="h1" className="hero__title">
          <p><b>Become a member of the society!</b></p>
        </Heading>
        <p><button className="button button--primary"><div className="icon-text-inline"><FormsIcon className="symbol-inline"/> Register on Google Forms</div></button></p>
        <p>Contact us at <Link to="mailto:uom.robosoc@gmail.com">uom.robosoc@gmail.com</Link></p>
      </div>
    </header>
  );
}

function LocationSection() {
  return (
    <header className={clsx('hero')} id="location">
      <div className="container" >
        <div className="row">
          <div className="col col--6">
            <Heading as="h3" className="hero__title">
              <p><b>Visit us at the Nancy Rothwell Building</b></p>
            </Heading>
            <p>Sessions typically run every Wednesday 2-5pm and make use of the Dry Lab and the Makerspace.</p>
          </div>
          <div className="col col--6">
            <img src={useBaseUrl("/img/nancy-rothwell.jpg")} />
            <p className="text--secondary-dark">Credit: fify.club</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function EventsSection() {
  return (
    <header className={clsx('hero')} id="events">
      <div className="container" >
        <div className="row">
          <div className="col col--3">
            <Heading as="h1" className="hero__title">
              <p><b>Upcoming Events</b></p>
            </Heading>
          </div>
        </div>
      </div>
    </header>
  );
}

function CommitteeSection() {
  return (
    <header className={clsx('hero')} id="committee">
      <div className="container text--center" >
        <Heading as="h3" className="hero__title">
          <p><b>Our Committee</b></p>
        </Heading>

        <p>Founded in 2013, and is currently run by the following people</p>

        <HomepageCommittee/>

      </div>
    </header>
  );
}

function HackathonSection() {
  return (
    <header className={clsx('hero')} id="hackathon">
      <div className="container" >
        <div className="row">
          <div className="col col--6">
            <Heading as="h3" className="hero__title">
              <p><b>Await our yearly Hackathon!</b></p>
            </Heading>
            <p>Hack-a-bot first took place in 2022, with the most recent being one of the biggest 24 hour hackathons in the UK! <Link to="https://developer.sony.com/posts/hack-a-bot-2025-imx500-powers-24-hour-student-hackathon">See Sony's post about the 2025 event.</Link></p>
          </div>
          <div className="col col--6">
            <img src={useBaseUrl("/img/hackathon.jpg")} />
            <p className="text--secondary-dark">Credit: Sony</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Divider() {
  return (
    <div className={styles.divider}>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProjectSection />
        <HackathonSection />
        <CommitteeSection />
        <LocationSection />
        <RegisterSection />
        <Divider />
      </main>
    </Layout>
  );
}
