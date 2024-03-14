"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Test.module.css";
import { selectAll } from "../api/quest.js";

// export default function Test() {
export default () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [userName, setUserName] = useState(""); // 사용자 이름을 저장할 상태 추가
  const router = useRouter();

  // quest.js API 를 통하여 DB 로 부터 fetch 한 데이터를
  // client component 에서 가져와서 사용하기
  useEffect(() => {
    const fetchQuest = async () => {
      const questList = await selectAll();
      const result = questList.map((item) => ({
        question: item.question,
        answers: [item.answer1, item.answer2, item.answer3],
      }));
      setQuestions([...result]);
    };
    fetchQuest();
  }, []);
  // []가 생략되면 ,mount 될때 1번만 실행된다

  useEffect(() => {
    // 로컬 스토리지에서 사용자 이름 가져오기
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }

    // 질문이 모든 질문을 넘어서면 escape 페이지로 이동
    // if (currentQuestionIndex >= questions.length) {
    //   router.push("/escape");
    // }
  }, [currentQuestionIndex, questions, router]);

  const handleAnswerClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // question이 모두 끝나면
    if (currentQuestionIndex >= questions.length - 1) {
      router.push("/escape");
    }
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverExit = () => {
    setHoveredIndex(-1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    // const questList = await selectAll();
    // const questions = questList.map((item) => ({
    // seq: `${item.q_seq}`,
    // question: `${item.q_quest}`,
    // answers: [
    // `${item.q_answer1}`,
    // `${item.q_answer2}`,
    // `${item.q_answer3}`,
    // ],
    // }));
    <div className={styles.container}>
      <main className={styles.maina}>
        <header className={styles.title}>
          <h1>설문지</h1>
        </header>
        {userName && ( // 사용자 이름이 있으면 표시
          <div className={styles.userName}>
            <h2>피실험자 : {userName}</h2>
          </div>
        )}
        <div className={`${styles.quizSub} ${styles.dotSeparated}`}>
          <h2 className={styles.question}>
            {currentQuestion && currentQuestion.question}{" "}
          </h2>
        </div>
        <div className={styles.quizCard}>
          <div className={styles.answers}>
            {currentQuestion &&
              currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className={
                    (currentQuestionIndex === 6 ||
                      currentQuestionIndex === 7 ||
                      currentQuestionIndex === 8) &&
                    hoveredIndex === index
                      ? `${styles.hoverEffect}`
                      : styles.answerButton
                  }
                  onClick={handleAnswerClick}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverExit}
                >
                  <span className={styles.hiddenText}>
                    {hoveredIndex === index &&
                    (currentQuestionIndex === 6 ||
                      currentQuestionIndex === 7 ||
                      currentQuestionIndex === 8)
                      ? "예"
                      : answer}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};
