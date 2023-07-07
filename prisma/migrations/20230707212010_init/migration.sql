-- CreateTable
CREATE TABLE "Crystal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "affirmation" TEXT NOT NULL,
    "sign" TEXT NOT NULL,
    "chakra" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "shape" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "system" TEXT NOT NULL,
    "hardness" TEXT NOT NULL,
    "vibration" TEXT NOT NULL,
    "composition" TEXT NOT NULL,
    "physical" TEXT NOT NULL,
    "emotional" TEXT NOT NULL,
    "spiritual" TEXT NOT NULL,

    CONSTRAINT "Crystal_pkey" PRIMARY KEY ("id")
);
