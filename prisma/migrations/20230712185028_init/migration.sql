/*
  Warnings:

  - You are about to drop the column `location` on the `Crystal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Crystal" DROP COLUMN "location",
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "rarity" DROP NOT NULL,
ALTER COLUMN "class" DROP NOT NULL,
ALTER COLUMN "system" DROP NOT NULL,
ALTER COLUMN "hardness" DROP NOT NULL,
ALTER COLUMN "vibration" DROP NOT NULL,
ALTER COLUMN "composition" DROP NOT NULL,
ALTER COLUMN "physical" DROP NOT NULL,
ALTER COLUMN "emotional" DROP NOT NULL,
ALTER COLUMN "spiritual" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
