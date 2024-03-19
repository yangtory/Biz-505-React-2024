"use client";
// import Image from "next/image";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList";
import { useEffect, useState } from "react";
import { selectAll as st_selectAll } from "@/app/api/student.js";
import StudentDetail from "./comps/StudentDetail";
import ScoreList from "./comps/ScoreList";
import { findByStNum } from "./api/score";

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll();
      if (result) {
        setStudentList([...result]);
        setStudent(result[0]); //초기값 셋팅용
      }
    };
    stdFetch();
  }, []);

  useEffect(() => {
    const scoreFetch = async () => {
      // 앞에 있는 값이 둘 다 null이면 뒤에값 넣기
      const result = await findByStNum(student?.st_num ?? "S0001");
      setScoreList([...result]);
    };
    scoreFetch();
    // [student] 에 변화가 생기면
  }, [student]);

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList
          studentList={studentList}
          setStudent={setStudent}
        />
      </section>
      <section className={styles.detail}>
        <StudentDetail
          studentDetail={studentDetail}
          student={student}
        >
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
