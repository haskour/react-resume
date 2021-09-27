export default function ListWithTitle(props) {
  return (
    <div className="list-with-title__content">
      <h3 className="list-with-title__title">{props.title}</h3>
      <ul>
        {props.items ? (
          props.items.map((item, key) => (
            <li key={key}>
              {props.keyVal ? item.name.concat(": ", item.value) : item.name}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
