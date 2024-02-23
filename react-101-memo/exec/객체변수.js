const 객체 = { 이름: "홍길동", 나이: 20, 주소: "서울특별시" };
console.log(객체);

// 객체의 이름속성 값을 보여줘
console.log("이름", 객체.이름);
console.log("나이", 객체["나이"]);

// 객체를 구조분해하여 개별 변수에 값 할당하기
const { 이름, 나이, 주소 } = 객체;
console.log([이름]);
console.log([나이]);

// 객체를 펼처서(구조분해 하여) 복제하고 이름 속성의 값을 이몽룡으로 변경
console.log({ ...객체, 이름: "이몽룡" });

// 객체를 구조분해하여 복제하고, 이름속성에 저장된 문자열로 새로운 Key 를 만들고
// 그 Key 의 값으로 성춘향을 저장하여 새로운 객체에 포함해
console.log({ ...객체, [이름]: "성춘향" }); // [이름] 문자열로 변수 만듬 키:값

const nation = "Korea";
const newNation = { [nation]: "대한민국" };
console.log(newNation);
