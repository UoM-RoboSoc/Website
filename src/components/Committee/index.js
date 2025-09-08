import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CommitteeCard from './CommitteeCard';

const CommitteeList = [
  {
    name: "Alessandro",
    role: "Chair",
    img: "/img/Committee_Alessandro.png"
  },
  {
    name: "Alayna",
    role: "General Secretary",
    img: "/img/Committee_Alayna.png"
  },
  {
    name: "Nadeem",
    role: "Treasurer",
    img: "/img/Committee_Nadeem.png"
  },
  {
    name: "Seun",
    role: "Inclusions Officer, Events Team",
    img: "/img/Committee_Seun.png"
  },
  {
    name: "Joshua B",
    role: "Technician",
    img: "/img/Committee_Joshua B.png"
  },
  {
    name: "Justin",
    role: "Project Lead",
    img: "/img/Committee_Justin.png"
  },
  {
    name: "Arjan",
    role: "Project Lead",
    img: "/img/Committee_Arjan.png"
  },
  {
    name: "Joshua A",
    role: "Project Lead",
    img: "/img/Committee_Joshua A.png"
  },
  {
    name: "Levon",
    role: "Project Lead",
    img: "/img/Committee_Levon.png"
  },
  {
    name: "Dinakar",
    role: "Project Lead",
    img: "/img/Committee_Dinakar.png"
  },
  {
    name: "Tara",
    role: "Project Lead",
    img: "/img/Committee_Tara.png"
  },
  {
    name: "Xandra",
    role: "Project Support",
    img: "/img/Committee_Xandra.png"
  },
  {
    name: "Camila",
    role: "Project Support",
    img: "/img/Committee_Camila.png"
  },
  {
    name: "Joshua F",
    role: "Project Support",
    img: "/img/Committee_Joshua F.png"
  },
  {
    name: "Rabia",
    role: "Media Manager",
    img: "/img/Committee_Rabia.png"
  },
  {
    name: "Zoe",
    role: "Media Manager",
    img: "/img/Committee_Zoe.png"
  },
  {
    name: "Billy",
    role: "Events Team",
    img: "/img/Committee_Billy.png"
  },
  {
    name: "Archie",
    role: "Hackathon Team",
    img: "/img/Committee_Archie.png"
  },
  {
    name: "Ted",
    role: "Hackathon Team",
    img: "/img/Committee_Ted.png"
  },
  {
    name: "Thierry",
    role: "Hackathon Team",
    img: "/img/Committee_Thierry.png"
  },
];

// 4 columns
export default function CommitteeCards() {
  return (
    <div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(0,4).map((props, idx) => (
          <div className="col col--3">
          <CommitteeCard key={idx} {...props} />
          </div>
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(4,8).map((props, idx) => (
          <div className="col col--3">
          <CommitteeCard key={idx} {...props} />
          </div>
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(8,12).map((props, idx) => (
          <div className="col col--3">
          <CommitteeCard key={idx} {...props} />
          </div>
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(12,16).map((props, idx) => (
          <div className="col col--3">
          <CommitteeCard key={idx} {...props} />
          </div>
        ))}
      </div>
      <div className={clsx("row",styles.row)}>
        {CommitteeList.slice(16,20).map((props, idx) => (
          <div className="col col--3">
          <CommitteeCard key={idx} {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}

