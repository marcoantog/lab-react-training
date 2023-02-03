import { useState } from 'react';
import style from './style.module.css';

export function LikeButton(props) {
  const arr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('purple');

  return (
    <button
      onClick={() => {
        setNumber(number + 1);
        setColor(arr[(number + 1) % 6]);
      }}
      style={{ backgroundColor: color }}
      className={style.btn}
    >
      {number} Likes
    </button>
  );
}

//
