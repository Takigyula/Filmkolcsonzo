import React, { useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';

const Gyik = () => {
  const [active, setActive] = useState({});

  const toggleActive = (id) => {
    setActive((prevActive) => ({ ...prevActive, [id]: !prevActive[id] }));
  };

  return (
    <div className="gyik">
      <FelsoNav />
      <h1>Gyakori Kérdések az Oldallal Kapcsolatban</h1>
      <div className="gyik-kategoriak">
        <h2>Általános Kérdések</h2>
        <ul>
          <li>
            <h3 onClick={() => toggleActive('q1')}>Miért nem tudok belépni a NextStream fiókomba?</h3>
            {active.q1 && (
              <p>
                Lehetséges okok: Elfelejtett jelszó, helytelen e-mail cím, internetkapcsolati probléma.
              </p>
            )}
            {active.q1 && (
              <p>
                Megoldás: Próbálj meg jelszót visszaállítani a "Elfelejtetted a jelszavad?" opcióval a belépési oldalon. Ha a
                problémát nem sikerül megoldani, ellenőrizd, hogy nem történt-e fiókhoz való hozzáférés visszaélés.
              </p>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleActive('q2')}>Hogyan tudom módosítani a NextStream előfizetésemet?</h3>
            {active.q2 && (
              <p>
                Megoldás: Lépj be a NextStream fiókodba, és válaszd az "A fiók" menüpontot. Itt találod az előfizetési lehetőségek
                módosítását (például a csomagok közötti váltást).
              </p>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleActive('q3')}>Hogyan törölhetem a NextStream fiókom?</h3>
            {active.q3 && (
              <p>
                Megoldás: A fiók törléséhez lépj be a fiókodba, majd menj a "Fiók" szekcióba és válaszd az "Előfizetés lemondása"
                opciót. Az előfizetésed törlésével a hozzáférésed megszűnik, de a korábban megtekintett tartalmakat nem törlik
                automatikusan, és a lemondás után is 30 napig elérhetők.
              </p>
            )}
          </li>
        </ul>
      </div>
      <div className="gyik-kategoriak">
        <h2>Technikai Kérdések</h2>
        <ul>
          <li>
            <h3 onClick={() => toggleActive('q4')}>Hogyan frissíthetem a NextStream alkalmazást?</h3>
            {active.q4 && (
              <p>
                Megoldás: Nyisd meg a mobiltelefonod alkalmazásboltját (Google Play vagy App Store), keresd meg a NextStream
                alkalmazást, és ha elérhető frissítés, akkor válaszd a "Frissítés" gombot.
              </p>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleActive('q5')}>Miért nem működik a NextStream a tévémben?</h3>
            {active.q5 && (
              <p>
                Lehetséges okok: Internetkapcsolati problémák, alkalmazás frissítésének szükségessége, eszközhöz való
                inkompatibilitás.
              </p>
            )}
            {active.q5 && (
              <p>
                Megoldás: Ellenőrizd az internetkapcsolatot, próbáld újraindítani a NextStream alkalmazást vagy az eszközt (például a
                TV-t vagy a streaming eszközt, mint a Chromecast vagy a Roku).
              </p>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleActive('q6')}>Miért nem tudok videót lejátszani?</h3>
            {active.q6 && (
              <p>
                Lehetséges okok: Internetproblémák, a NextStream szerverek karbantartása, vagy az eszközön lévő problémák.
              </p>
            )}
            {active.q6 && (
              <p>
                Megoldás: Ellenőrizd az internetkapcsolatot, prób álj meg újra betölteni a videót, vagy indítsd újra az alkalmazást.
                Ha a probléma továbbra is fennáll, próbálkozz másik eszközzel.
              </p>
            )}
          </li>
        </ul>
      </div>
      <div className="gyik-kategoriak">
        <h2>Elérhetőség</h2>
        <ul>
          <li>
            <h3 onClick={() => toggleActive('q7')}>Miért nem elérhetők egyes tartalmak a régiómban?</h3>
            {active.q7 && (
              <p>
                Lehetséges okok: A NextStream katalógusa régiónként változik, és egyes filmek/tévéműsorok nem elérhetők minden
                területen a jogi vagy licencelési megállapodások miatt.
              </p>
            )}
            {active.q7 && (
              <p>
                Megoldás: Sajnos a NextStream nem tud garanciát vállalni arra, hogy minden tartalom minden országban elérhető lesz,
                de VPN használatával néhány felhas használó megpróbálhatja elérni más régiók kínálatát, bár ezt a NextStream nem javasolja.
              </p>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleActive('q8')}>Hogyan tudom törölni a NextStream megtekintett tartalmainak előzményeit?</h3>
            {active.q8 && (
              <p>
                Megoldás: Lépj be a NextStream fiókodba, és válaszd a "Fiók" menüpontot. Itt találod a "Tevékenységek" szekciót,
                ahol törölheted a megtekintett tartalmak listáját.
              </p>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleActive('q9')}>Miért nincs hangom a NextStreamen?</h3>
            {active.q9 && (
              <p>
                Lehetséges okok: Hibás beállítások a tévén, számítógépen vagy telefonon.
              </p>
            )}
            {active.q9 && (
              <p>
                Megoldás: Ellenőrizd a hangbeállításokat az eszközödön, valamint próbáld ki másik eszközzel, hogy megtudd,
                ott is fennáll-e a probléma.
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gyik;