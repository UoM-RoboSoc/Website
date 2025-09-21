export default function Details(props) {
  return (
    <details>
      <summary>{props.title}</summary>

      {props.desc}
    </details>
  );
}
