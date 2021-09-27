export default function EducationItem(props) {
  return (
    <div className="educationItem-item">
      <h3>{props.data.title}</h3>
      <p className="educationItem-item__meta">
        {props.data.institut} | {props.data.from} - {props.data.to}
      </p>
    </div>
  );
}
