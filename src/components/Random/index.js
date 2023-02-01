import style from './style.module.css';

export function Random(props) {
  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className={style.oDiv}>
      Random value between {props.min} and {props.max} ={'>'}{' '}
      {randomValue(props.min, props.max)}
    </div>
  );
}
