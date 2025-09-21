import styles from './styles.module.css';

export default function CommitteeCard({name, role, img}) {
  return (
    <div className="avatar">
      <img
        className={`avatar__photo avatar__photo--lg ${styles.avatar__photo}`}
        src={img ? img : '/assets/roboLogo.svg'} />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        {role && <small className="avatar__subtitle">{role}</small>}
      </div>
    </div>
  );
}
