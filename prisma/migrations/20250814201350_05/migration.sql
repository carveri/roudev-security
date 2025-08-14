/*
  Warnings:

  - You are about to drop the column `creciemientoDelTicket` on the `FlujoDeCaja` table. All the data in the column will be lost.
  - Added the required column `crecimientoDelTicket` to the `FlujoDeCaja` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlujoDeCaja" DROP COLUMN "creciemientoDelTicket",
ADD COLUMN     "crecimientoDelTicket" INTEGER NOT NULL;
