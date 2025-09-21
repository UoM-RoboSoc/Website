import { useState } from 'react';
import styles from './styles.module.css';
import Section from '../Section';
import Link from '@docusaurus/Link';
import RegisterButton from '../RegisterButton';

function CopyEmailButton(props) {
  const email = props.children;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={styles.tooltipContainer}>
      <span>Contact us at <a onClick={copyToClipboard} className={`${styles.link} button--link`}>
        {email}
      </a> (Click to copy!)
      </span>
      <span className={`${styles.tooltip} ${copied ? "show" : ""}`}>
        {copied ? "Copied!" : "Copy email"}
      </span>
    </div>
  );
}

export default function MainCTA(props) {
  return (
    <Section>
      <div className={styles.section}>
        <p>Interested?</p>
        <h1>{props.title || `Become a member of the society!`}</h1>
        <RegisterButton
          className="button button--primary button--lg"/>
      <p><br/></p>
      <CopyEmailButton>
        {props.contact || "uom-robosoc@gmail.com"}
      </CopyEmailButton>
      </div>
    </Section>
  );
}
