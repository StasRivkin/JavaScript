import './App.css';
import main from './img/main.jpg';
import friend1 from './img/friend1.jpg';
import friend2 from './img/friend2.jpg';
import friend3 from './img/friend3.jpg';
import friend4 from './img/friend4.jpg';
import friend5 from './img/friend5.jpg';
import friend6 from './img/friend6.jpg';
import friend7 from './img/friend7.jpg';
import friend8 from './img/friend8.jpg';
import friend9 from './img/friend9.jpg';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>home</li>
            <li>about me</li>
            <li>star wars</li>
            <li>contact</li>
          </ul>
        </nav>
        <h1>Luke Skywalker</h1>
      </header>
      <main>
        <section className="left">
          <img src={main} alt="Luke Skywalker"/>
        </section>
        <section className="right">
          <table>
            <tbody>
            <tr>
              <th colSpan="3">
                Dream Team
              </th>
            </tr>
            <tr>
              <td><img src={friend1} alt="R2D2"/></td>
              <td><img src={friend2} alt="C3PO"/></td>
              <td><img src={friend3} alt="Thrasher"/></td>
            </tr>
            <tr>
              <td><img src={friend4} alt="Chubaka"/></td>
              <td><img src={friend5} alt="Han Solo"/></td>
              <td><img src={friend6} alt="Princess Leia"/></td>
            </tr>
            <tr>
              <td><img className="bottomLeft" src={friend7} alt="Starship"/></td>
              <td><img src={friend8} alt="Obivan Kenobi"/></td>
              <td><img className="bottomRight" src={friend9} alt="Master Yoda"/></td>
            </tr>
            </tbody>
          </table>
        </section>
        <p className="farGalaxy">
          It is a period of civil war.
          Rebel spaceships, striking
          from a hidden base, have won
          their first victory against
          the evil Galactic Empire.
          During the battle, Rebel
          spies managed to steal secret
          plans to the Empire's
          ultimate weapon, the DEATH
          STAR, an armored space
          station with enough power
          to destroy an entire planet.
          Pursued by the Empire's
          sinister agents, Princess
          Leia races home aboard her
          starship, custodian of the
          stolen plans that can save her
          people and restore
          freedom to the galaxy....
        </p>
      </main>
      <footer>
        <div className="button">
          <p>
            Send me an <span className="email">email</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
