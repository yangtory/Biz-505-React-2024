"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PRODUCT = prisma.tbl_product;

export const findByPName = async (p_name) => {
  const result = await PRODUCT.findMany({
    where: {
      p_name: {
        contains: p_name,
      },
    },
  });
  return result;
};
