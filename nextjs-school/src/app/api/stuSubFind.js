"use server";
import { PrismaClient } from "@prisma/client";

// 데이터 가져오기
const DB = new PrismaClient();
export const StuSubFind = async ({ stdCode }) => {
  try {
    const std = await DB.tbl_stu_sub.findMany({
      where: {
        r_stcode: stdCode,
      },
    });
    await DB.$disconnect();
    return std;
  } catch (error) {
    console.error("Error ", error);
    return null;
  }
};
