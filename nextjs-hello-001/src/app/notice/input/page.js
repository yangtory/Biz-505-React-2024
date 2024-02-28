import styles from "@/css/Notice.Input.module.css";
// api/notice.js 에 선언된 createNotice() 함수를 사용하겠다
import { createNotice } from "@/app/api/notice";
import { redirect } from "next/navigation";
/**
 * 공지사항 작성하기
 * 작성자, 제목, 내용, 중요도
 * 저장 버튼
 */
// notice/input/page.js
export default () => {
  // form 에서 나온 data를 actionhandler 가 가로채감
  const actionHandler = async (formData) => {
    // form 으로 submit 하면 클라이언트 렌더링이됨, 서버렌더링하기 위해 씀
    "use server";
    console.log(formData);
    //action에 의해서 전달된 formData를 JSON 타입의 데이터로 변환
    const noticeData = {
      m_author: formData.get("m_author"),
      m_flag: formData.get("m_flag"),
      m_subject: formData.get("m_subject"),
      m_content: formData.get("m_content"),
      m_date: "2024-02-28",
      m_time: "15:16:00",
    };
    // 여기 await 쓰려면 createNotice 도 async 해주기
    await createNotice(noticeData);
    redirect("/notice");
  };
  return (
    <form
      action={actionHandler}
      method="POST"
      className={styles.form}
    >
      <div>
        <input placeholder="작성자" name="m_author"></input>
      </div>
      <div>
        <select name="m_flag">
          <option value="0">중요도 선택</option>
          <option value="1">중요공지</option>
          <option value="2">일반공지</option>
          <option value="3">지난공지</option>
        </select>
      </div>
      <div>
        <input placeholder="제목" name="m_subject"></input>
      </div>
      <div>
        <textarea
          placeholder="내용"
          rows="10"
          name="m_content"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="저장"></input>
      </div>
    </form>
  );
};
