import React, { useRef, useState, useEffect } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CommitteeCard from '@site/src/components/CommitteeCard';
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './styles.module.css';

import { projects } from '@site/src/data/projects';
import Link from '@docusaurus/Link';
import { committee2526 } from '@site/src/data/committee';

import { Pagination, Navigation, HashNavigation, History, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';

function ProjectCard(props) {
  const committee = committee2526;

  const img = committee.find(obj => {
    return obj.name === props.projectLead
  }).img

  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.imageContainer}>
        <Link to={`Projects/${props.id}`}><img
          src={props.img} /></Link>
      </div>
      <div className="card__header">
        <Link to={`Projects/${props.id}`}>
        <h3 className={styles.projectTitle}>{props.title}</h3>
        </Link>
        <span className={`badge badge--${props.difficulty.toLowerCase()}`}>{props.difficulty}</span>
      </div>
      <div className="card__body">
        <p>
          {props.shortDescription}
        </p>
      </div>
      <div className="card__footer">
        <CommitteeCard
          name={props.projectLead}
          role={`${props.projectLeadTitle}`}
          img={img}/>
        <Link
          className={`button button--primary ${styles.button}`}
          to={`Projects/${props.id}`}>
          Learn more
        </Link>
      </div>
    </div>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className={`button button--primary button--outline`} onClick={() => swiper.slidePrev()}>&laquo;</button>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className={`button button--primary button--outline`} onClick={() => swiper.slideNext()}>&raquo;</button>
  );
}

export default function ProjectCarousel() {
  const swiperRef = useRef(null);

  const allDifficulties = ['All', ...new Set(projects.flatMap(slide => slide.difficulty))];

  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredProjects =
    selectedDifficulty === 'All'
      ? projects
      : projects.filter(slide => slide.difficulty.includes(selectedDifficulty));

  return (
    <>
      <div className={styles.filters}>
        <ul className={`tabs ${styles.tabs}`}>
          {allDifficulties.map(difficulty => (
            <li
              key={difficulty}
              className={`tabs__item ${difficulty === selectedDifficulty ? 'tabs__item--active' : ''}`}
              onClick={() => {
                setSelectedDifficulty(difficulty);
              }}
            >
              {difficulty}
            </li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <button className={`button button--primary button--outline`} onClick={() => swiperRef.current.slidePrev()}>&laquo;</button>
          <button className={`button button--primary button--outline`} onClick={() => swiperRef.current.slideNext()}>&raquo;</button>
        </div>

      </div>

      <br/>

      <div className="container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={30}
          centerInsufficientSlides={true}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            // when window width is >= 400
            600: {
              slidesPerView: 2,
            },
            // when window width is >= 800
            900: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          modules={[Pagination, Navigation, HashNavigation, History, Autoplay, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {filteredProjects.map((props, idx) => (
            <SwiperSlide className={styles.swiperSlide} data-hash={`slide${idx}`}><ProjectCard key={idx} {...props} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
