-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plataformas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "Plataformas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MisPlataformas" (
    "id" SERIAL NOT NULL,
    "usuariosId" INTEGER NOT NULL,
    "plataformaId" INTEGER NOT NULL,

    CONSTRAINT "MisPlataformas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peliculas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "plataformaId" INTEGER NOT NULL,

    CONSTRAINT "Peliculas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favoritas" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "peliculaId" INTEGER NOT NULL,
    "puntuacion" INTEGER NOT NULL,

    CONSTRAINT "Favoritas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plataformas_nombre_key" ON "Plataformas"("nombre");

-- AddForeignKey
ALTER TABLE "MisPlataformas" ADD CONSTRAINT "MisPlataformas_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MisPlataformas" ADD CONSTRAINT "MisPlataformas_plataformaId_fkey" FOREIGN KEY ("plataformaId") REFERENCES "Plataformas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peliculas" ADD CONSTRAINT "Peliculas_plataformaId_fkey" FOREIGN KEY ("plataformaId") REFERENCES "Plataformas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoritas" ADD CONSTRAINT "Favoritas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoritas" ADD CONSTRAINT "Favoritas_peliculaId_fkey" FOREIGN KEY ("peliculaId") REFERENCES "Peliculas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
