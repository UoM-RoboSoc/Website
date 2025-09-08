import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Role({role}) {
  if (role === undefined) {
    return;
  }
  return (
    <small class="avatar__subtitle">{role}</small>
  );
}

function Photo({img}) {
  let imgSrc;
  if ((img === undefined) || (!img)) {
    console.log(`UNSUCCESSFUL ${img} passed to Photo function`);
    imgSrc='/img/robosoc_logo.png';
  } else {
    console.log(`SUCCESSFUL ${useBaseUrl(img)} passed to Photo function`);
    imgSrc=img
  }
  return (
    <img
      className={clsx("avatar__photo avatar__photo--xl", styles.avatar__photo)}
      src={useBaseUrl(imgSrc)} />
  );
}

export default function CommitteeCard({name, role, img}) {
  return (
      <div class="avatar">
        <Photo img={img}/>
        <div class="avatar__intro">
          <div class="avatar__name">{name}</div>
          <Role role={role}/>
        </div>
      </div>
  );
}
