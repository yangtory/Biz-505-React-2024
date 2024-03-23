import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const selectAll = async (code) => {
    const PRODUCT = prisma.tbl_product;
    const result = await PRODUCT.findMany({
        where: {
            p_code: code,
        },
    });
    return result;
};
