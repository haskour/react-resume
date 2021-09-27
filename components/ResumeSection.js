export default function ResumeSection(props) {
  return (
    <div className="resume-section">
      <h2 className="resume-section__title">{props.title}</h2>
      {props.children}

      <hr className="resume-section__separator" />
    </div>
  );
}
