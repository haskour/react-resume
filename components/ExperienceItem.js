export default function ExperienceItem(props) {
  return (
    <div className="experience-item">
      <h3>{props.data.title}</h3>
      <p className="experience-item__meta">
        {props.data.company} | {props.data.from} - {props.data.to}
      </p>

      <p className="experience-item__description">{props.data.description}</p>
    </div>
  );
}
