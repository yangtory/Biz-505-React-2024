"use client";
// import { Student } from "@/app/api/student";
import { useState, useEffect } from "react";
import { StudentFind } from "@/app/api/studentFind";
import { StuSubFind } from "@/app/api/stuSubFind";

// stdDetail.js
export default ({ stdCode }) => {
  const [std, setStd] = useState("");
  const [score, setScore] = useState("");
  useEffect(() => {
    const fetchStd = async () => {
      let sum = 0;
      const avg = sum / 7;
      try {
        const result = await StudentFind({ stdCode });
        const score = await StuSubFind({ stdCode });
        if (result) {
          setStd(result);
          setScore(score);
          console.log(score);
        } else {
          console.log("Failed");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStd();
  }, [stdCode]);
  return (
    <>
      <ul>
        <h1>학생정보</h1>
        <li>학번 : {std.st_code}</li>
        <li>이름 : {std.st_name}</li>
        <li>학과 : {std.st_dept}</li>
        <li>학년 : {std.st_grade}</li>
        <li>전화번호 : {std.st_tel}</li>
        <li>주소 : {std.st_addr}</li>
      </ul>
      <thead>
        <td>
          <th>과목명</th>
          <th>점수</th>
        </td>
      </thead>
      <tbody>
        <td>
          <tr>국어 : {score.length > 0 && score[0].r_score}</tr>
          <tr>영어 : {score.length > 0 && score[1].r_score}</tr>
          <tr>수학 : {score.length > 0 && score[2].r_score}</tr>
          <tr>음악 : {score.length > 0 && score[3].r_score}</tr>
          <tr>미술 : {score.length > 0 && score[4].r_score}</tr>
          <tr>
            소프트웨어공학 : {score.length > 0 && score[5].r_score}
          </tr>
          <tr>
            데이터베이스 : {score.length > 0 && score[6].r_score}
          </tr>
          <tr>총점 : </tr>
        </td>
      </tbody>
    </>
  );
};
