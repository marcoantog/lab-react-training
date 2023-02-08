import profiles from '../../data/berlin.json';
import { useState } from 'react';
import style from './style.module.css';

export function FaceBook() {
  const [people, setPeople] = useState(profiles);

  function allChange() {
    people.map((e) => {
      console.log(e);
    });
  }

  return (
    <>
      <button onClick={allChange}>All</button>
      {people.map((e) => {
        return (
          <div className={style.outerDiv}>
            <img src={e.img} alt="Facebook" className={style.photo} />
            <div>
              <b>First Name:</b> {e.firstName} <br />
              <b>Last Name:</b> {e.lastName} <br />
              <b>Contry:</b> {e.country} <br />
              <b>Type:</b> {e.isStudent ? 'Student' : 'Teacher'} <br />
            </div>
          </div>
        );
      })}
    </>
  );
}
