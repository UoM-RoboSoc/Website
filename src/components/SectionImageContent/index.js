import Section from '../Section';

import styles from './styles.module.css';

function Content(props) {
  return (
    <div className={styles.content}>
      <div>
        <h2 className={styles.title}>
          {props.title}
        </h2>
        <p className={styles.desc}>
          {props.desc}
        </p>
      </div>
      <div>
        {props.buttonJSX}
      </div>
    </div>
  )
}

function Image(props) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={props.image} />
    </div>
  )
}

export default function SectionImageContent(props) {
  return (
    <Section id={props.id} {...props}>
      <div className={`container ${styles.container}`}>
        {props.imagePos === "right" ? <Content {...props}/> : <Image {...props}/>}
        {props.imagePos === "right" ? <Image {...props}/> : <Content {...props}/>}
      </div>
    </Section>
  );
}
