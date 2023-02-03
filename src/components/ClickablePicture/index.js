import { useState } from 'react';
import style from './style.module.css';

export function ClickablePicture(props) {
  const [img, imgClicked] = useState(props.img);

  function handleToggleImg() {
    imgClicked((currentState) => {
      if (currentState === props.img) {
        return props.imgClicked;
      } else {
        return props.img;
      }
    });
  }

  return (
    <img src={img} alt="guy" onClick={handleToggleImg} className={style.img} />
  );
}
