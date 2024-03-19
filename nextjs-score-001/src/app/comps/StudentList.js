import "../../css/stlist.css";

const StudentList = ({ studentList, setStudent }) => {
  const viewList = studentList.map((item) => (
    <li key={item.st_num} onClick={() => setStudent(item)}>
      <strong>{item.st_num}</strong>
      <span>{item.st_name}</span>
      <span>{item.st_dept}</span>
    </li>
  ));
  return (
    <>
      <h1>학생리스트</h1>
      <ul className="stul">{viewList}</ul>
    </>
  );
};
export default StudentList;
