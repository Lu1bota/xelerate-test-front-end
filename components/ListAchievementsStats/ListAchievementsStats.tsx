import { achievementsStats } from "@/constants/achievementsStats";
import scss from "./ListAchievementsStats.module.scss";
import ItemAchievementsStats from "../ItemAchievementsStats/ItemAchievementsStats";

export default function ListAchievementsStats() {
  return (
    <ul className={scss.listAchievementsStats}>
      {achievementsStats.map(({ itemNumber, textStats, statsCount }) => (
        <li key={itemNumber}>
          <ItemAchievementsStats
            itemNumber={itemNumber}
            textStats={textStats}
            statsCount={statsCount}
          />
        </li>
      ))}
    </ul>
  );
}
