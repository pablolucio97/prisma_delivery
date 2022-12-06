/*
  Warnings:

  - You are about to drop the column `password` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "deliveries_username_key";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "password",
DROP COLUMN "username";
