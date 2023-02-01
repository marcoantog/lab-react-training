import style from './style.module.css';

export function IdCard(props) {
  return (
    <div className={style.outerDiv}>
      <img src={props.picture} className={style.photo} alt="person" />
      <div>
        <strong>First Name:</strong> {`${props.firstName}`}
        <br />
        <strong>Last Name:</strong> {`${props.lastName}`}
        <br />
        <strong>Gender:</strong> {props.gender}
        <br />
        <strong>Height:</strong> {props.height}
        <br />
        <strong>Birth:</strong> {props.birth}
        <br />
      </div>
    </div>
  );
}
