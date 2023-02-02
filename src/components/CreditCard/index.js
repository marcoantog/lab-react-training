import masterCard from '../../assets/images/master-card.png';
import visaCard from '../../assets/images/visa.png';
import style from './style.module.css';

export function CreditCard(props) {
  function addCardFlag(type) {
    if (type === 'Master Card') {
      return masterCard;
    } else if (type === 'Visa') {
      return visaCard;
    }
  }

  function cardNumber(string) {
    return `•••• •••• •••• ${string.substr(-4)}`;
  }

  function monthYear(num1, num2) {
    if (num1.toString().length === 1) {
      return `0${num1}/${num2.toString().substr(-2)}`;
    }
    return `${num1}/${num2.toString().substr(-2)}`;
  }

  return (
    <div className={style.card} style={{ backgroundColor: props.bgColor }}>
      <div className={style.logo}>
        <img
          src={addCardFlag(props.type)}
          alt="card"
          className={style.cardImage}
        />
      </div>
      <div className={style.cardInfoBox} style={{ color: props.color }}>
        <p className={style.cardInfo}>{cardNumber(props.number)}</p>

        <span className={style.expText}>
          Expires {monthYear(props.expirationMonth, props.expirationYear)}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {props.bank}
          <br />
          {props.owner}
        </span>
      </div>
    </div>
  );
}
