import styles from "./write.module.css";
import { redirect } from "next/navigation";

const FORM_NAME = {
  CATEGORY: "category",
  SUBJECT: "subject",
  CONTENT: "content",
};
export default () => {
  // form 의 input 에 입력한 값들을 함수에 전달해주는 매개변수가 필요
  // formData 에 input 에 입력한 값들이 담겨서 전달된다.
  const actionHandler = async (formData) => {
    "use server"; // 이 친구만 sever(back-end) 처럼 동작시켜
    const data = {
      category: formData.get(FORM_NAME.CATEGORY),
      subject: formData.get(FORM_NAME.SUBJECT),
      content: formData.get(FORM_NAME.CONTENT),
    };
    console.log("FORM", data);
    redirect("/blog/all");
  };
  console.log("여기는 어디?");
  return (
    <form
      action={actionHandler}
      method="POST"
      className={styles.form}
    >
      <input placeholder="카테고리" name={FORM_NAME.CATEGORY} />
      <input placeholder="제목" name={FORM_NAME.SUBJECT} />
      <textarea
        placeholder="내용"
        rows="20"
        name={FORM_NAME.CONTENT}
      />
      <input
        className={styles.submit}
        type="submit"
        value="저장하기"
      />
    </form>
  );
};
