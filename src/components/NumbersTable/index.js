import style from './style.module.css';

export function NumbersTable(props) {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <div className={style.oDiv}>
      {numbers.map((currentNumber, i) => {
        if (i < props.limit && i % 2 === 0) {
          return <div className={style.odd}>{currentNumber}</div>;
        } else if (i < props.limit && i % 2 !== 0) {
          return <div className={style.even}>{currentNumber}</div>;
        }
      })}
    </div>
  );
}
