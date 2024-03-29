"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;
export const selectAll = async (code) => {
  const result = await PRODUCT.findMany({
    where: {
      p_code: {
        startsWith: code,
      },
    },
  });
  return result;
};
