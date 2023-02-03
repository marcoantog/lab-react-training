import style from './style.module.css';

export function DriverCard(props) {
  function genStar(num) {
    let star = '';
    if (Math.round(num) === 0) {
      star = '☆☆☆☆☆';
    } else if (Math.round(num) === 1) {
      star = '★☆☆☆☆';
    } else if (Math.round(num) === 2) {
      star = '★★☆☆☆';
    } else if (Math.round(num) === 3) {
      star = '★★★☆☆';
    } else if (Math.round(num) === 4) {
      star = '★★★★☆';
    } else if (Math.round(num) === 5) {
      star = '★★★★★';
    }
    return star;
  }

  return (
    <div className={style.oDiv}>
      <img src={props.img} alt="driver" className={style.img} />
      <p className={style.text}>
        <b className={style.bold}>{props.name}</b>
        <br />
        <span className={style.stars}>{genStar(props.rating)}</span> <br />
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}
