/*
  Warnings:

  - You are about to drop the column `fk_id_client` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `fk_id_delivery` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `id_client` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_fk_id_client_fkey";

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_fk_id_delivery_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "fk_id_client",
DROP COLUMN "fk_id_delivery",
ADD COLUMN     "id_client" TEXT NOT NULL,
ADD COLUMN     "id_delivery" TEXT,
ALTER COLUMN "end_at" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_delivery_fkey" FOREIGN KEY ("id_delivery") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
