import Container from "../Container/Container";
import scss from "./Achievements.module.scss";

export default function Achievements() {
  return (
    <section className={scss.section}>
      <Container>
        <div className={scss.background}></div>

        <div>
          <h1 className={scss.title}>Досягнення</h1>
          <p className={scss.subtitle}>Ви крутіші, ніж 87% спеціалістів!</p>
        </div>

        <div className={scss.containerAchievements}>
          {/* Progress bar 
              <div>
                  <div></div>
              </div>
              */}

          <ul className={scss.listAchievements}>
            <li>
              <p className={scss.itemCount}>8</p>
              <p className={scss.itemDesc}>Досягнень відкрито 1 рангу</p>
            </li>
            <li>
              <p className={scss.itemCount}>7</p>
              <p className={scss.itemDesc}>Досягнень відкрито 2 рангу</p>
            </li>
            <li>
              <p className={scss.itemCount}>3</p>
              <p className={scss.itemDesc}>Досягнень відкрито 3 рангу</p>
            </li>
            <li>
              <p className={scss.itemCount}>123</p>
              <p className={scss.itemDesc}>Досягнення закрито</p>
            </li>
          </ul>
        </div>

        <ul className={scss.listAchievementsStats}>
          <li>
            <p className={scss.itemNumber}>01</p>
            <div className={scss.containerStats}>
              <p className={scss.textStats}>Всі досягнення</p>
              <p className={scss.statsCount}>134</p>
            </div>
          </li>
          <li>
            <p className={scss.itemNumber}>02</p>
            <div className={scss.containerStats}>
              <p className={scss.textStats}>Досягнення на платформі</p>
              <p className={scss.statsCount}>56</p>
            </div>
          </li>
          <li>
            <p className={scss.itemNumber}>03</p>
            <div className={scss.containerStats}>
              <p className={scss.textStats}>Досягнення фахівця</p>
              <p className={scss.statsCount}>23</p>
            </div>
          </li>
        </ul>

        <select name="ranks" id="ranks">
          <option value="all">Всі ранги</option>
        </select>
      </Container>
    </section>
  );
}
