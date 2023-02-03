import { useState } from 'react';
import style from './style.module.css';

export function Carousel(props) {
  const [number, setNumber] = useState(0);
  const [img, setImg] = useState(props.images[0]);

  return (
    <>
      <img src={img} alt="Carousel" />
      <div className={style.btn}>
        <button
          onClick={() => {
            setNumber(number - 1);
            setImg(props.images[Math.abs((number - 1) % props.images.length)]);
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            setNumber(number + 1);
            setImg(props.images[Math.abs((number + 1) % props.images.length)]);
          }}
        >
          Right
        </button>
      </div>
    </>
  );
}
