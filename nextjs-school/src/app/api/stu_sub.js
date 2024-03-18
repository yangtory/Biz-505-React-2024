/**
 * nextJS 에서 생성한 컴포넌트는 기본적으로 server 컴포넌트가 된다
 * 하지만 기타 모듈은 "use server" 라고 커멘트를 명시해 주어야
 * 서버용으로 작동된다
 */
"use server";
import { PrismaClient } from "@prisma/client";

// 데이터 가져오기
const DB = new PrismaClient();
export const STU_SUB = async () => {
  try {
    const stu_sub = await DB.tbl_stu_sub.findMany();
    await DB.$disconnect();
    return stu_sub;
  } catch (error) {
    console.error("Error ", error);
    return null;
  }
};
