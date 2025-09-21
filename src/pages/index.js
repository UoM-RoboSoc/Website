import Layout from '@theme/Layout';
import styles from './index.module.css';

import MainHero from '@site/src/components/MainHero';
import Features from '@site/src/components/Features';
import Who from '@site/src/components/Who';
import Hackathon from '@site/src/components/Hackathon';
import ProjectCarousel from '@site/src/components/ProjectCarousel';
import Announcement from '@site/src/components/Announcement';
import Committee from '@site/src/components/Committee';
import Location from '@site/src/components/Location';
import MainCTA from '@site/src/components/MainCTA';

export default function Home() {
  return (
    <Layout
      title={`ROBOSOC`}>
      {/*
      <Announcement />
      */}
      <MainHero />
      <Who/>
      <Features />
      <ProjectCarousel />
      <Committee />
      <Hackathon />
      <Location />
      <MainCTA />
    </Layout>
  );
}
