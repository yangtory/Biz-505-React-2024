// 전달하는 개수와 관계없이 받을수 있음
const Item = (props) => {
  // 객체의 구조분해라고 한다.
  // props 가 받은 여러 변수들을 개별 변수로 분해하라, name과 age 변수가 생성된다.
  const { name, age } = props;
  return (
    <>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <div>
        {name}
        {age}
      </div>
    </>
  );
};

export default Item;
