import { useState } from 'react';
import Dice1 from '../../assets/images/dice1.png';
import Dice2 from '../../assets/images/dice2.png';
import Dice3 from '../../assets/images/dice3.png';
import Dice4 from '../../assets/images/dice4.png';
import Dice5 from '../../assets/images/dice5.png';
import Dice6 from '../../assets/images/dice6.png';
import Dice0 from '../../assets/images/dice-empty.png';
import style from './style.module.css';

export function Dice() {
  const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const [img, setImg] = useState(images[Math.floor(Math.random() * 6)]);

  function handleDice() {
    setTimeout(() => {
      setImg(() => {
        return images[Math.floor(Math.random() * 6)];
      });
    }, 500);
    setImg(Dice0);
  }

  return (
    <img src={img} alt="Dice" onClick={handleDice} className={style.img} />
  );
}
