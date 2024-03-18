-- CreateTable
CREATE TABLE `tbl_student` (
    `st_code` VARCHAR(191) NOT NULL,
    `st_name` VARCHAR(191) NOT NULL,
    `st_dept` VARCHAR(191) NOT NULL,
    `st_grade` VARCHAR(191) NOT NULL,
    `st_tel` VARCHAR(191) NULL,
    `st_addr` VARCHAR(191) NULL,

    PRIMARY KEY (`st_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_subject` (
    `su_code` VARCHAR(191) NOT NULL,
    `su_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`su_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_stu_sub` (
    `r_stcode` VARCHAR(191) NOT NULL,
    `r_sucode` VARCHAR(191) NOT NULL,
    `r_score` VARCHAR(191) NULL,

    PRIMARY KEY (`r_stcode`, `r_sucode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_stu_sub` ADD CONSTRAINT `tbl_stu_sub_r_stcode_fkey` FOREIGN KEY (`r_stcode`) REFERENCES `tbl_student`(`st_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_stu_sub` ADD CONSTRAINT `tbl_stu_sub_r_sucode_fkey` FOREIGN KEY (`r_sucode`) REFERENCES `tbl_subject`(`su_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
