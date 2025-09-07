import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CommitteeList = [
  {
    name: "Alessandro",
    role: "Chair",
    img: "/Website/img/Alessandro.jpg"
  },
  {
    name: "Alayna",
    role: "General Secretary",
    img: "/img/Alayna.jpg"
  },
  {
    name: "Nadeem",
    role: "Treasurer",
    img: "/img/Nadeem.jpg"
  },
  {
    name: "Seun",
    role: "Inclusions Officer, Events Team",
    img: "/img/Seun.jpg"
  },
  {
    name: "Joshua B",
    role: "Technician",
    img: "/img/Joshua B.jpg"
  },
  {
    name: "Justin",
    role: "Project Lead",
    img: "/img/Justin.jpg"
  },
  {
    name: "Arjan",
    role: "Project Lead",
    img: "/img/Arjan.jpg"
  },
  {
    name: "Joshua A",
    role: "Project Lead",
    img: "/img/Joshua A.jpg"
  },
  {
    name: "Levon",
    role: "Project Lead",
    img: "/img/Levon.jpg"
  },
  {
    name: "Dinakar",
    role: "Project Lead",
    img: "/img/Dinakar.jpg"
  },
  {
    name: "Tara",
    role: "Project Lead",
    img: "/img/Tara.jpg"
  },
  {
    name: "Xandra",
    role: "Project Support",
    img: "/img/Xandra.jpg"
  },
  {
    name: "Camila",
    role: "Project Support",
    img: "/img/Camila.jpg"
  },
  {
    name: "Joshua F",
    role: "Project Support",
    img: "/img/Joshua F.jpg"
  },
  {
    name: "Rabia",
    role: "Media Manager",
    img: "/img/Rabia.jpg"
  },
  {
    name: "Zoe",
    role: "Media Manager",
    img: "/img/Zoe.jpg"
  },
  {
    name: "Billy",
    role: "Events Team",
    img: "/img/Billy.jpg"
  },
  {
    name: "Archie",
    role: "Hackathon Team",
    img: "/img/Archie.jpg"
  },
  {
    name: "Ted",
    role: "Hackathon Team",
    img: "/img/Ted.jpg"
  },
  {
    name: "Thierry",
    role: "Hackathon Team",
    img: "/img/Thierry.jpg"
  },
];

function CommitteeCard({name, role, img}) {
  return (
    <div className={clsx("col col--3", styles.col)}>
      <div class="avatar">
        <img
          className={clsx("avatar__photo avatar__photo--xl", styles.avatar__photo)}
          src={useBaseUrl(img)} />
        <div class="avatar__intro">
          <div class="avatar__name">{name}</div>
          <small class="avatar__subtitle">{role}</small>
        </div>
      </div>
    </div>
  );
}

// 4 columns
export default function CommitteeCards() {
  return (
    <div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(0,4).map((props, idx) => (
          <CommitteeCard key={idx} {...props} />
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(4,8).map((props, idx) => (
          <CommitteeCard key={idx} {...props} />
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(8,12).map((props, idx) => (
          <CommitteeCard key={idx} {...props} />
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(12,16).map((props, idx) => (
          <CommitteeCard key={idx} {...props} />
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(16,20).map((props, idx) => (
          <CommitteeCard key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

