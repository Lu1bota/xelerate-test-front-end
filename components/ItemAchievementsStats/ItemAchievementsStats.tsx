import scss from "./ItemAchievementsStats.module.scss";

interface ItemAchievementsStatsProps {
  itemNumber: string;
  textStats: string;
  statsCount: string;
}

export default function ItemAchievementsStats({
  itemNumber,
  textStats,
  statsCount,
}: ItemAchievementsStatsProps) {
  return (
    <>
      <p className={scss.itemNumber}>{itemNumber}</p>
      <div className={scss.containerStats}>
        <p className={scss.textStats}>{textStats}</p>
        <p className={scss.statsCount}>{statsCount}</p>
      </div>
    </>
  );
}
