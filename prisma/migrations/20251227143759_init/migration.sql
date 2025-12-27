/*
  Warnings:

  - Added the required column `projectType` to the `CustomerContacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerContacts" ADD COLUMN     "isDiscussed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "projectType" TEXT NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
