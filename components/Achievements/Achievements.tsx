import Container from "../Container/Container";
import StarIcon from "../StarIcon/StarIcon";
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
          <div className={scss.containerProgressBar}>
            <div className={scss.containerProgressStats}>
              <div className={scss.containerIcon}>
                <StarIcon />
                <p className={scss.openStats}>відкрито досягнень</p>
              </div>
              <p className={scss.allStatsCount}>
                18 <span className={scss.countColor}>/ 143</span>
              </p>
            </div>

            <div className={scss.progressbar}>
              <div className={scss.progressLine}></div>
              <div className={scss.progressTrack}></div>
            </div>
          </div>

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

        <div className={scss.containerListStats}>
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

          <div className={scss.containerSelect}>
            <select name="ranks" id="ranks">
              <option value="all">Всі ранги</option>
            </select>
          </div>
        </div>
      </Container>
    </section>
  );
}
