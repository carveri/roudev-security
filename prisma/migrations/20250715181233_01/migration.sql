-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT,
    "rutPersonal" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "email2" TEXT,
    "emailVerified2" TIMESTAMP(3),
    "emailPersonal" TEXT,
    "telefonoPersonal" TEXT,
    "telefonoLaboral" TEXT,
    "perfilLinkedin" TEXT,
    "perfilGitHub" TEXT,
    "avatar" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "añosDeExperiencia" INTEGER NOT NULL DEFAULT 0,
    "trabajando" BOOLEAN NOT NULL DEFAULT false,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "tipoTrabajoIdeal" TEXT,
    "tipoTrabajoActual" TEXT,
    "salarioActual" INTEGER,
    "perteneceAlProyecto" BOOLEAN NOT NULL DEFAULT true,
    "siguiendo" BOOLEAN NOT NULL DEFAULT false,
    "rangoSalarialMinimo" INTEGER NOT NULL DEFAULT 500,
    "rangoSalarialMaximo" INTEGER NOT NULL DEFAULT 2000,
    "equity" INTEGER NOT NULL DEFAULT 0,
    "statusEnProyecto" TEXT NOT NULL DEFAULT 'Empleado',
    "dineroDisponible" INTEGER,
    "fechaIngreso" TIMESTAMP(3),
    "puntosPersonales" INTEGER NOT NULL DEFAULT 0,
    "planId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proyecto" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreProyecto" TEXT NOT NULL,
    "iconoProyecto" TEXT,
    "fechaInicio" TEXT NOT NULL,
    "fechaTermino" TEXT,
    "fechaSuspension" TEXT,
    "fechaActualizacion" TEXT,
    "statusProyecto" TEXT NOT NULL DEFAULT 'Activo',
    "puntosDelProyecto" INTEGER NOT NULL DEFAULT 0,
    "responsableProyecto" TEXT NOT NULL,
    "presupuestoDelProyecto" INTEGER NOT NULL DEFAULT 0,
    "ceo" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cto" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cfo" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "coo" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "empleado" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "finalidadProyectoId" TEXT NOT NULL,
    "tipoProyectoId" TEXT NOT NULL,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnProductos" (
    "userId" TEXT NOT NULL,
    "proyectoId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersOnProductos_pkey" PRIMARY KEY ("userId","proyectoId")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Factura" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreFactura" TEXT NOT NULL,
    "tipoFactura" TEXT NOT NULL DEFAULT 'General',
    "mesFacturacion" TEXT NOT NULL,
    "añoFacturacion" INTEGER NOT NULL,
    "diaFacturacion" INTEGER NOT NULL,
    "valorFacturacion" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProyectosOnFactura" (
    "proyectoId" TEXT NOT NULL,
    "facturaId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ProyectosOnFactura_pkey" PRIMARY KEY ("proyectoId","facturaId")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombrePlan" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinalidadProyecto" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreFinalidadProyecto" TEXT NOT NULL DEFAULT 'Hobby',

    CONSTRAINT "FinalidadProyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoProyecto" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreTipoProyecto" TEXT NOT NULL DEFAULT 'App Web',

    CONSTRAINT "TipoProyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreArea" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreCargo" TEXT NOT NULL DEFAULT 'Ceo',
    "sueldo" INTEGER NOT NULL,
    "areaId" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnCargos" (
    "userId" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersOnCargos_pkey" PRIMARY KEY ("userId","cargoId")
);

-- CreateTable
CREATE TABLE "Equipo" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreEquipo" TEXT NOT NULL,
    "responsableEquipo" TEXT NOT NULL,
    "puntosDelEquipo" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Equipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnEquipos" (
    "userId" TEXT NOT NULL,
    "equipoId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersOnEquipos_pkey" PRIMARY KEY ("userId","equipoId")
);

-- CreateTable
CREATE TABLE "ProyectosOnEquipos" (
    "proyectoId" TEXT NOT NULL,
    "equipoId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ProyectosOnEquipos_pkey" PRIMARY KEY ("proyectoId","equipoId")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreTarea" TEXT NOT NULL,
    "tipoTarea" TEXT NOT NULL DEFAULT 'Historia',
    "statusTarea" TEXT NOT NULL DEFAULT 'Activa',
    "fechaInicio" TEXT NOT NULL,
    "fechaTermino" TEXT NOT NULL,
    "etapaTarea" TEXT NOT NULL DEFAULT 'Product Backlog',
    "retornada" BOOLEAN NOT NULL DEFAULT false,
    "creadorTarea" TEXT NOT NULL,
    "responsableTarea" TEXT NOT NULL,
    "equipoResponsableTarea" TEXT NOT NULL,
    "urgenciaTarea" TEXT NOT NULL DEFAULT 'Alta',
    "nivelDeAvance" TEXT NOT NULL DEFAULT 'Inicial',
    "descripcionDeTarea" TEXT NOT NULL DEFAULT '-',
    "aportantes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "equipoId" TEXT NOT NULL,
    "proyectoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormaDePago" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreFormaPago" TEXT[] DEFAULT ARRAY['Credito']::TEXT[],
    "numeroCuotas" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "FormaDePago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnFormaDePago" (
    "userId" TEXT NOT NULL,
    "formaDePagoId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersOnFormaDePago_pkey" PRIMARY KEY ("userId","formaDePagoId")
);

-- CreateTable
CREATE TABLE "FlujoDeCaja" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ingresosPorVentas" INTEGER NOT NULL,
    "valorTicket" INTEGER NOT NULL,
    "creciemientoDelTicket" INTEGER NOT NULL,
    "usuarioGratuitos" INTEGER NOT NULL,
    "usuariosActivos" INTEGER NOT NULL,
    "nuevosUsuarios" INTEGER NOT NULL,
    "churnedUsers" INTEGER NOT NULL,
    "disminucionDeUsuarios" INTEGER NOT NULL,
    "usuariosActivosFlujo" INTEGER NOT NULL,

    CONSTRAINT "FlujoDeCaja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstadoDeResultados" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "costosOperativos" INTEGER,

    CONSTRAINT "EstadoDeResultados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BalanceGeneral" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "hora_at" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "activoCorriente" INTEGER,
    "activoNoCorriente" INTEGER,
    "capitalPropio" INTEGER,

    CONSTRAINT "BalanceGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProyectoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProyectoToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FacturaToProyecto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FacturaToProyecto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CargoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CargoToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EquipoToProyecto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EquipoToProyecto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EquipoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EquipoToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FormaDePagoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FormaDePagoToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_rutPersonal_key" ON "User"("rutPersonal");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "_ProyectoToUser_B_index" ON "_ProyectoToUser"("B");

-- CreateIndex
CREATE INDEX "_FacturaToProyecto_B_index" ON "_FacturaToProyecto"("B");

-- CreateIndex
CREATE INDEX "_CargoToUser_B_index" ON "_CargoToUser"("B");

-- CreateIndex
CREATE INDEX "_EquipoToProyecto_B_index" ON "_EquipoToProyecto"("B");

-- CreateIndex
CREATE INDEX "_EquipoToUser_B_index" ON "_EquipoToUser"("B");

-- CreateIndex
CREATE INDEX "_FormaDePagoToUser_B_index" ON "_FormaDePagoToUser"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_finalidadProyectoId_fkey" FOREIGN KEY ("finalidadProyectoId") REFERENCES "FinalidadProyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_tipoProyectoId_fkey" FOREIGN KEY ("tipoProyectoId") REFERENCES "TipoProyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnProductos" ADD CONSTRAINT "UsersOnProductos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnProductos" ADD CONSTRAINT "UsersOnProductos_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProyectosOnFactura" ADD CONSTRAINT "ProyectosOnFactura_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProyectosOnFactura" ADD CONSTRAINT "ProyectosOnFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cargo" ADD CONSTRAINT "Cargo_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnCargos" ADD CONSTRAINT "UsersOnCargos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnCargos" ADD CONSTRAINT "UsersOnCargos_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnEquipos" ADD CONSTRAINT "UsersOnEquipos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnEquipos" ADD CONSTRAINT "UsersOnEquipos_equipoId_fkey" FOREIGN KEY ("equipoId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProyectosOnEquipos" ADD CONSTRAINT "ProyectosOnEquipos_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProyectosOnEquipos" ADD CONSTRAINT "ProyectosOnEquipos_equipoId_fkey" FOREIGN KEY ("equipoId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_equipoId_fkey" FOREIGN KEY ("equipoId") REFERENCES "Equipo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnFormaDePago" ADD CONSTRAINT "UsersOnFormaDePago_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnFormaDePago" ADD CONSTRAINT "UsersOnFormaDePago_formaDePagoId_fkey" FOREIGN KEY ("formaDePagoId") REFERENCES "FormaDePago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToUser" ADD CONSTRAINT "_ProyectoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToUser" ADD CONSTRAINT "_ProyectoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacturaToProyecto" ADD CONSTRAINT "_FacturaToProyecto_A_fkey" FOREIGN KEY ("A") REFERENCES "Factura"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacturaToProyecto" ADD CONSTRAINT "_FacturaToProyecto_B_fkey" FOREIGN KEY ("B") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToUser" ADD CONSTRAINT "_CargoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToUser" ADD CONSTRAINT "_CargoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipoToProyecto" ADD CONSTRAINT "_EquipoToProyecto_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipoToProyecto" ADD CONSTRAINT "_EquipoToProyecto_B_fkey" FOREIGN KEY ("B") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipoToUser" ADD CONSTRAINT "_EquipoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipoToUser" ADD CONSTRAINT "_EquipoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormaDePagoToUser" ADD CONSTRAINT "_FormaDePagoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "FormaDePago"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormaDePagoToUser" ADD CONSTRAINT "_FormaDePagoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
