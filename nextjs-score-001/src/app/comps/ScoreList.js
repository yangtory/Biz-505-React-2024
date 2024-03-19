import css from "@/css/score.list.module.css";

const ScoreList = ({ scoreList }) => {
  let scoreTotal = 0;
  const viewList = scoreList.map((item, index) => {
    scoreTotal += item.s_score;
    return (
      <li className={css.item} key={index}>
        <strong>{item.s_subject}</strong>
        <span>{item.s_score}</span>
      </li>
    );
  });
  return (
    <>
      <ul className={`${css.item} ${css.strong}`}>
        {viewList}
        <li className={css.item}>
          <strong>총점</strong>
          <span>{scoreTotal}</span>
          <strong>평균</strong>
          <span>{Math.round(scoreTotal / scoreList.length, 0)}</span>
        </li>
      </ul>
    </>
  );
};
export default ScoreList;
