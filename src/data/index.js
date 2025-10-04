import { FaMountain } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { HiOutlineAcademicCap } from 'react-icons/hi';

export const homeFeatures = [
  {
    title: 'Projects',
    Icon: FaMountain,
    description: (
      <>
        Find a project suited for you! The main focus of the society are the projects we offer, structured to welcome participants at every level of expertise, creating a smooth progression from beginner to advanced and ensuring there's something for everyone.
      </>
    ),
  },
  {
    title: 'Socials',
    Icon: FaUserFriends,
    description: (
      <>
        Get to know our community better at our social nights! Socialise after each session, or just drop by for the socials without committing to a project.
      </>
    ),
  },
  {
    Icon: HiOutlineAcademicCap,
    title: 'Events and Talks',
    description: (
      <>
        Visit us at our events! Get insights into the industry, hear from academics, or attend skill-building workshops.
      </>
    ),
  },
  {
    Icon: MdBuild,
    title: 'Hackathons',
    description: (
      <>
        Form a team and tackle challenges within 24 hours! Our yearly hackathon is one of the biggest 24-hour hackathons in the UK, and members are free to join and at no cost.
      </>
    ),
  },
];
