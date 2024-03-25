"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CUSTOMER = prisma.tbl_customer;
export const findByCustomer = async (key) => {
  console.log("검색어", key);
  const result = await CUSTOMER.findMany({
    where: {
      OR: [
        // 첫번째 search 는 키워드임 : LIKE %..% 와 같다
        { c_name: { contains: key } },
        { c_tel: { contains: key } },
      ],
    },
  });
  console.log("검색결과", result);
  return result;
};
