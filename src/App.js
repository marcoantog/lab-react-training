import { IdCard } from './components/IdCard';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';
import { Rating } from './components/Rating';
import { DriverCard } from './components/DriverCard';
import { LikeButton } from './components/LikeButton';

import style from './style.module.css';

function App() {
  return (
    <div className="App">
      <b>Iteration 1</b>
      <hr />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <br />
      <br />
      <b>Iteration 2</b>
      <hr />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <br />
      <br />
      <b>Iteration 3</b>
      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <br />
      <br />
      <b>Iteration 4</b>
      <hr />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <br />
      <br />
      <b>Iteration 5</b>
      <hr />
      <div className={style.intFive}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <br />
      <br />
      <b>Iteration 6</b>
      <hr />
      <div className={style.intSix}>
        <Rating>0</Rating> <br />
        <Rating>1.49</Rating>
        <br />
        <Rating>1.5</Rating>
        <br />
        <Rating>3</Rating>
        <br />
        <Rating>4</Rating>
        <br />
        <Rating>5</Rating>
      </div>

      <br />
      <br />
      <b>Iteration 7</b>
      <hr />
      <div className={style.intSeven}>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>

      <br />
      <br />
      <b>Iteration 8</b>
      <hr />
      <div className={style.intEight}>
        <LikeButton />
      </div>
    </div>
  );
}

export default App;
