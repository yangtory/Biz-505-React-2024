/**
 * NextJS 는 SSR, CSR 을 같이 지원하는 Framework 이다.
 * 순수 React 에서는 모든 것이 CSR 이기때문에 별다른 조치 없이
 * 내장된 함수, 기능 등을 사용할 수 있다.
 *
 * 하지만 NextJS 에서는 컴포넌트가 SSR 에서 동작하느냐, CSR 에서 동작하느냐 에 따라
 * 사용할 수 있는 함수, 기능이 차이가 있다.
 *
 * CSR 에서 동작하는 함수를 그냥 사용하면 사용불가 오류 발생
 * 이 컴포넌트 에서는 userRouter 함수와, onClick 기능을 사용하려고 한다.
 * 이런 경우에는 현재 컴포넌트를 CSR 환경에서 동작하도록 명시해 줘야 한다.
 * "use client" 를 파일 첫 라인에 명시해 주면 이 컴포넌트는 CSR 환경에서 동작
 */
"use client"; // 여기 코드는 이제부터 클라이언트 방식이야
import { useRouter } from "next/navigation";

// all/page.js
export default () => {
  // Link 를 사용하지 않고 함수 등에서 사용하는 router
  // useRouter() 를 사용하여 생성한다.
  const router = useRouter();

  // db 등에서 fetch 한 데이터 List 를 화면에 출력하는 방법
  const blogList = [
    { id: 1, subject: "안녕하세요" },
    { id: 2, subject: "반갑습니다" },
    { id: 3, subject: "오늘은 목요일" },
  ];

  const onClickHandler = (id) => {
    // alert(id);
    // router.push() 를 사용하면 함수에서 특정한 router 로 전환해 준다
    router.push(`/blog/detail/${id}`);
  };

  // event 핸들러에 값을 전달하고자 할 때 핸들러 세팅
  // onClick={()=>호출할 함수(전달할 값)}
  // onClick={호출할 함수(전달할 값)} 절대XXX
  const viewList = blogList.map((blog) => {
    return (
      <li key={blog.id} onClick={() => onClickHandler(blog.id)}>
        <sapn>{blog.id}</sapn>
        <span>{blog.subject}</span>
      </li>
    );
  });

  return (
    <>
      <h3>전체글 보기</h3>
      <ul>{viewList}</ul>
    </>
  );
};

// v12 이하에서 자동 실행되는 함수 : getStaticProps
// 서버에서 데이터를 가져오거나 하는 역할을 자동으로 수행하는 함수
// export const getStaticProps = async () => {
//   return {
//     props: { blogList: blogList },
//   };
// };
