-- CreateTable
CREATE TABLE "Proyecto" (
    "id" TEXT NOT NULL,
    "nombreProyecto" TEXT NOT NULL,
    "estadoProyecto" TEXT NOT NULL DEFAULT 'Activo',
    "idUsuario" TEXT NOT NULL DEFAULT '1',
    "idFinalidadProyecto" TEXT NOT NULL DEFAULT '2',
    "idTipoProyecto" TEXT NOT NULL DEFAULT '4',
    "idSubTipoProyecto" TEXT NOT NULL DEFAULT '3',

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id")
);
