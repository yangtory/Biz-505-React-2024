"use server";
import { PrismaClient } from "@prisma/client";

// 데이터 가져오기
const DB = new PrismaClient();
export const StudentFind = async ({ stdCode }) => {
  try {
    const std = await DB.tbl_student.findUnique({
      where: {
        st_code: stdCode,
      },
    });
    await DB.$disconnect();
    return std;
  } catch (error) {
    console.error("Error ", error);
    return null;
  }
};
