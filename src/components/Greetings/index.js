import style from './style.module.css';

export function Greetings(props) {
  function generateGreet(lang) {
    let message = '';
    if (lang === 'de') {
      message = 'Hallo';
    } else if (lang === 'fr') {
      message = 'Bonjour';
    }
    return message;
  }
  return (
    <div className={style.oDiv}>
      {`${generateGreet(props.lang)} ${props.children}`}
    </div>
  );
}
