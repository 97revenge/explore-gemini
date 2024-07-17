-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topic" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "cardId" TEXT,

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "topic" ADD CONSTRAINT "topic_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
