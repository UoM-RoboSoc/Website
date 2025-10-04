import Layout from '@theme/Layout';
import styles from './index.module.css';

import MainHero from '@site/src/components/MainHero';
import Features from '@site/src/components/Features';
import Who from '@site/src/components/Who';
import Hackathon from '@site/src/components/Hackathon';
import ProjectSection from '@site/src/components/ProjectSection';
import Announcement from '@site/src/components/Announcement';
import Committee from '@site/src/components/Committee';
import Location from '@site/src/components/Location';
import MainCTA from '@site/src/components/MainCTA';
import { committee2526 } from '@site/src/data/committee';

export default function Home() {
  return (
    <Layout
      title={`ROBOSOC`}>
      {/*
      <Announcement />
      */}
      <div className={styles.layout}>
      <MainHero />
      <Who/>
      <Features />
      <ProjectSection />
      <Committee list={committee2526}/>
      <Hackathon />
      <Location />
      <MainCTA />
      </div>
    </Layout>
  );
}
