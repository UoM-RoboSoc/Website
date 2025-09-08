import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const SocialList = [
  {
    label: 'Instagram',
    img: '/img/instagram.png',
    to: 'https://www.instagram.com/uom_robosoc/',
  },
  {
    label: 'Discord',
    img: '/img/discord.png',
    to: 'https://discord.gg/JwrXZmu5fP',
  },
  {
    label: 'Youtube',
    img: '/img/youtube.png',
    to: 'https://www.youtube.com/channel/UCfwnHCMXjAZ_oWmqDuxO6Bg',
  },
  {
    label: 'Facebook',
    img: '/img/facebook.png',
    to: 'https://www.facebook.com/RoboSoc.uom/',
  },
  {
    label: 'Linktree',
    img: '/img/linktree.png',
    to: 'https://linktr.ee/uom_robosoc',
  },
  {
    label: 'Manchester Student Union Page',
    img: '/img/manchester_su.png',
    to: 'https://manchesterstudentsunion.com/activities/view/robotics',
  },
];

function SocialIcon({label, img, to}) {
  return (
    <a href={to}><img className={`icon`} src={useBaseUrl(img)}></img></a>
  );
}

export default function Socials() {
  return (
    <div className={`flex-1`}>
        {SocialList.map((props, idx) => (
          <SocialIcon key={idx} {...props} />
        ))}
    </div>
  );
}
