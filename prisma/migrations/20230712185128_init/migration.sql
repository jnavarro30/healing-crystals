/*
  Warnings:

  - Made the column `image` on table `Crystal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Crystal" ADD COLUMN     "location" TEXT,
ALTER COLUMN "image" SET NOT NULL;
