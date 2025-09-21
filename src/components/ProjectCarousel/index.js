import { useState } from 'react';
import Section from '@site/src/components/Section';
import Slider from "react-slick";
import CommitteeCard from '@site/src/components/CommitteeCard';
import RegisterButton from '@site/src/components/RegisterButton';
import { projects } from '@site/src/data';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CTA() {
  return (
    <div className="project-cta">
      Contact <a href={`mailto:`+contact}>{contact}</a> for any enquires.
    </div>
  )
}

function ProjectCard(props) {
  return (
    <>
      <div className={`card ${styles.card}`}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={props.img} />
        </div>
        <div className="card__header">
          <h3 className={styles.projectTitle}>{props.title}</h3>
          <span className="badge badge--secondary">{props.difficulty}</span>
        </div>
        <div className="card__body">
          <p>
            {props.shortDescription}
          </p>
        </div>
        <div className="card__footer">
          <CommitteeCard
            name={props.projectLead}
            role={`${props.title} lead`}/>
          <Link
            className={`button button--primary ${styles.button}`}
            to={`Projects/${props.id}`}>
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}

export default function ProjectCarousel() {
  const allDifficulties = ['All', ...new Set(projects.flatMap(slide => slide.difficulty))];

  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredProjects =
    selectedDifficulty === 'All'
      ? projects
      : projects.filter(slide => slide.difficulty.includes(selectedDifficulty));

  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    draggable: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 3000,
        settings: { slidesToShow: Math.min(filteredProjects.length, 3) }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(filteredProjects.length, 2) },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1 }
      },
    ],
  };
  return (
    <Section>
      <div className={styles.title} id="Projects">
        <h1>See the <span className="text-primary">Projects</span> we offer</h1>
      </div>

      <RegisterButton className="button button--primary button--outline button--lg"/>

      <p><br/></p>

      <ul className={`tabs ${styles.tabs}`}>
        {allDifficulties.map(difficulty => (
          <li
            key={difficulty}
            className={`tabs__item ${selectedDifficulty === difficulty ? 'tabs__item--active' : ''}`}
            onClick={() => setSelectedDifficulty(difficulty)}
          >
            {difficulty}
          </li>
        ))}
      </ul>

      <p><br/></p>

      <div className="container" id="hehe">
        <Slider {...settings}>
          {filteredProjects.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </Slider>
      </div>
    </Section>
  );
}
