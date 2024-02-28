import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const notice = await DB.tbl_notice.findMany();
    await DB.$disconnect();
    return notice;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// api/파일 은 db와 연결된 함수들
const createNotice = async (data) => {
  console.log(data);
  await DB.tbl_notice.create({ data: data });
};

export { createNotice, selectAll };
