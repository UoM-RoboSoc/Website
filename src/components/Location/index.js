import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import SectionImageContent from '../SectionImageContent';
import Image from '/img/nancy-rothwell.jpg';
import { MdOpenInNew } from 'react-icons/md';

export default function Location() {
  return (
    <SectionImageContent
      className={styles.section}
      id="Location"
      title="Sessions every Wednesday"
      desc={
        <>
          We are based at the Nancy Rothwell Building. Sessions typically run every Wednesday 2-5pm and make use of the Dry Lab and the Makerspace.
          <br/>
          <small>Image credit: mecanoo.nl</small>
        </>
      }
      image={Image}
      imagePos="right"
      buttonJSX={
        <>
          <Link to="https://maps.app.goo.gl/akPsJyJoeThYxT2f7" className="button button--primary">
            <span className={styles.buttonText}>
              <MdOpenInNew className={styles.icon}/>Open in Google Maps
            </span>
          </Link>
        </>
      }
    />
  );
}
