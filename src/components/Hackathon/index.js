import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import SectionImageContent from '../SectionImageContent';
import Image from '/img/hackathon.jpg';
import { MdOpenInNew } from 'react-icons/md';

const hackathon = {
  title: "Await our yearly Hackathon!",
  desc: (
    <>
      Hack-a-bot first took place in 2022, with the most recent being one of the biggest 24 hour hackathons in the UK! Students are able to join our hackathon at no cost to tackle different robotics-focused tasks in teams. <Link to="https://developer.sony.com/posts/hack-a-bot-2025-imx500-powers-24-hour-student-hackathon">See Sony's post about the 2025 event.</Link>
      <br/>
      <small>Image credit: Sony</small>
    </>
  )
}

export default function Who() {
  return (
    <SectionImageContent
      title={hackathon.title}
      desc={hackathon.desc}
      image={Image}
      imagePos="left"
      buttonJSX={
        <>
          <Link to="https://hackabot-2026.com/" className="button button--primary">
            <span className={styles.buttonText}>
            <MdOpenInNew className={styles.icon}/>Go to the website
            </span>
            </Link>
        </>
      }
    />
  );
}
