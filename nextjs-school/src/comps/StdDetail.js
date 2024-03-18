'use client';
// import { Student } from "@/app/api/student";
import { useState, useEffect } from 'react';
import { StudentFind } from '@/app/api/studentFind';
import { StuSubFind } from '@/app/api/stuSubFind';
import '@/comps/StdDetail.css';

// stdDetail.js
export default ({ stdCode }) => {
    const [std, setStd] = useState('');
    const [score, setScore] = useState('');
    const [sum, setSum] = useState('');
    const [avg, setAvg] = useState('');
    useEffect(() => {
        const fetchStd = async () => {
            try {
                const result = await StudentFind({ stdCode });
                const score = await StuSubFind({ stdCode });
                if (result) {
                    setStd(result);
                    setScore(score);
                    let sum = 0;
                    for (let i = 0; i < score.length; i++) {
                        sum += Number(score[i].r_score);
                        setSum(sum);
                    }
                    const avg = (sum / score.length).toFixed(1);
                    setAvg(avg);
                    console.log(sum);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchStd();
    }, [stdCode]);
    return (
        <section className="main">
            <div className="info">
                <h1>학생정보</h1>
                <ul>
                    <li>학번 : {std.st_code}</li>
                    <li>이름 : {std.st_name}</li>
                    <li>학과 : {std.st_dept}</li>
                    <li>학년 : {std.st_grade}</li>
                    <li>전화번호 : {std.st_tel}</li>
                    <li>주소 : {std.st_addr}</li>
                </ul>
            </div>
            <div className="score">
                <tr>
                    <th>과목명</th>
                    <th>점수</th>
                </tr>
                <tr>
                    <td>국어</td>
                    <td>{score.length > 0 && score[0].r_score}</td>
                </tr>
                <tr>
                    <td>영어</td>
                    <td>{score.length > 0 && score[1].r_score}</td>
                </tr>
                <tr>
                    <td>수학</td>
                    <td>{score.length > 0 && score[2].r_score}</td>
                </tr>
                <tr>
                    <td>음악</td>
                    <td>{score.length > 0 && score[3].r_score}</td>
                </tr>
                <tr>
                    <td>미술</td>
                    <td>{score.length > 0 && score[4].r_score}</td>
                </tr>
                <tr>
                    <td>소프트웨어공학</td>
                    <td>{score.length > 0 && score[5].r_score}</td>
                </tr>
                <tr>
                    <td>데이터베이스</td>
                    <td>{score.length > 0 && score[6].r_score}</td>
                </tr>
                <tr>
                    <td>총점</td>
                    <td>{sum}</td>
                </tr>
                <tr>
                    <td>평균</td>
                    <td>{avg}</td>
                </tr>
            </div>
        </section>
    );
};
