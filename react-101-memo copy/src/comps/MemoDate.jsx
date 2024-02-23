import moment from "moment";
const MemoDate = () => {
  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm:ss");
  return (
    <div className="memo_date">
      <input type="date" value={date} />
      <input type="time" value={time} />
      <input type="button" value="새로작성" />
    </div>
  );
};
export default MemoDate;
