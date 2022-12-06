-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_fk_id_delivery_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "fk_id_delivery" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_fk_id_delivery_fkey" FOREIGN KEY ("fk_id_delivery") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
