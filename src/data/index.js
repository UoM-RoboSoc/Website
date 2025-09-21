import { FaMountain } from 'react-icons/fa';
import { MdVolunteerActivism } from 'react-icons/md';
import { FaRegFaceSmileBeam } from 'react-icons/fa6';

export const committee = [
  {
    name: "Alessandro",
    role: "Chair",
    img: "/img/committee-members/Alessandro.png"
  },
  {
    name: "Alayna",
    role: "General Secretary",
    img: "/img/committee-members/Alayna.png"
  },
  {
    name: "Nadeem",
    role: "Treasurer",
    img: "/img/committee-members/Nadeem.png"
  },
  {
    name: "Seun",
    role: "Inclusions/Events",
    img: "/img/committee-members/Seun.png"
  },
  {
    name: "Joshua B",
    role: "Technician",
    img: "/img/committee-members/Joshua B.png"
  },
  {
    name: "Justin",
    role: "Project Lead",
    img: "/img/committee-members/Justin.png"
  },
  {
    name: "Arjan",
    role: "Project Lead",
    img: "/img/committee-members/Arjan.png"
  },
  {
    name: "Joshua A",
    role: "Project Lead",
    img: "/img/committee-members/Joshua A.png"
  },
  {
    name: "Levon",
    role: "Project Lead",
    img: "/img/committee-members/Levon.png"
  },
  {
    name: "Dinakar",
    role: "Project Lead",
    img: "/img/committee-members/Dinakar.png"
  },
  {
    name: "Tara",
    role: "Project Lead",
    img: "/img/committee-members/Tara.png"
  },
  {
    name: "Xandra",
    role: "Project Support",
    img: "/img/committee-members/Xandra.png"
  },
  {
    name: "Camila",
    role: "Project Support",
    img: "/img/committee-members/Camila.png"
  },
  {
    name: "Joshua F",
    role: "Project Support",
    img: "/img/committee-members/Joshua F.png"
  },
  {
    name: "Rabia",
    role: "Media Manager",
    img: "/img/committee-members/Rabia.png"
  },
  {
    name: "Zoe",
    role: "Media Manager",
    img: "/img/committee-members/Zoe.png"
  },
  {
    name: "Billy",
    role: "Events Team",
    img: "/img/committee-members/Billy.png"
  },
  {
    name: "Archie",
    role: "Hackathon Team",
    img: "/img/committee-members/Archie.png"
  },
  {
    name: "Ted",
    role: "Hackathon Team",
    img: "/img/committee-members/Ted.png"
  },
  {
    name: "Thierry",
    role: "Hackathon Team",
    img: "/img/committee-members/Thierry.png"
  },
];

export const homeFeatures = [
  {
    title: 'Beginner to Advanced',
    Icon: FaMountain,
    description: (
      <>
        Projects are available to those who need to learn the absolute basics, to those with extensive knowledge of the field.
      </>
    ),
  },
  {
    title: 'Affordable robotics access',
    Icon: MdVolunteerActivism,
    description: (
      <>
        We enable use of university facilities, can buy components for members where feasible, and have never charged membership fees.
      </>
    ),
  },
  {
    Icon: FaRegFaceSmileBeam,
    title: 'Meet like-minded people',
    description: (
      <>
        We want to be a place where members can make friends and connections that will stay with them of the rest of their lives.
      </>
    ),
  },
];

export const projects = [
  {
    id: 'buggy',
    title: 'The Buggy Project',
    difficulty: 'Beginner',
    projectLead: 'Justin',
    img: '/img/hero-images/arm-project.jpg',
    shortDescription: 'Build an autonomous buggy capable of navigating a maze!',
    contact: 'buggy@uom-robosoc.com',
  },
  {
    id: 'rfl',
    title: 'R.F.L',
    difficulty: 'Beginner',
    projectLead: 'Arjan',
    img: '/img/nancy-rothwell.jpg',
    shortDescription: 'Make fighting robots to compete in national competitions!',
    contact: 'rfl@uom-robosoc.com',
  },
  {
    id: 'cubo',
    title: 'C.U.B.O',
    difficulty: 'Intermediate',
    projectLead: 'Tara',
    img: '/img/cubo/white-cubo_blue-bg.png',
    shortDescription: "Build autonomous robots capable of solving a Rubik's cube in 60 seconds!",
    contact: 'cubo@uom-robosoc.com',
  },
  {
    id: 'spyders',
    title: 'Spyders',
    difficulty: 'Intermediate',
    projectLead: 'Dinakar',
    img: '/img/hero-images/arm-project.jpg',
    shortDescription: "Develop remote controlled multi-legged robots!",
    contact: 'spyders@uom-robosoc.com',
  },
  {
    id: 'artemis-iii',
    title: 'Artemis III',
    difficulty: 'Advanced',
    projectLead: 'Levon',
    img: '/img/hero-images/arm-project.jpg',
    shortDescription: "Develop a drone controlled by your hand movements!",
    contact: 'artemis@uom-robosoc.com',
  },
  {
    id: 'bespoke',
    title: 'Bespoke Projects',
    difficulty: 'Advanced',
    projectLead: 'Joshua B',
    img: '/img/hero-images/arm-project.jpg',
    shortDescription: "Work on our unfinished robots or bring your own idea to the table!",
    contact: 'bespoke@uom-robosoc.com',
  },
];
