/*
  Warnings:

  - The primary key for the `UsersOnProyectos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UsersOnProyectos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UsersOnProyectos" DROP CONSTRAINT "UsersOnProyectos_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UsersOnProyectos_pkey" PRIMARY KEY ("userId", "proyectoId");
