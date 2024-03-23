'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CUSTOMER = prisma.tbl_customer;
export const customerSearch = async (value) => {
    const result = await CUSTOMER.findMany({
        where: {
            c_code: {
                startsWith: value,
            },
        },
    });
    return result;
};
