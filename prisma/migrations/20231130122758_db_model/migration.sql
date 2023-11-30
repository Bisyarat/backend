-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "name" VARCHAR(200),
    "token" VARCHAR(200),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" SERIAL NOT NULL,
    "keterangan" VARCHAR(750) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" VARCHAR(50) NOT NULL,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(50) NOT NULL,
    "penjelasan" VARCHAR(500) NOT NULL,

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subkategori" (
    "id" SERIAL NOT NULL,
    "nama_sub_kategori" VARCHAR(50) NOT NULL,
    "penjelasan" VARCHAR(500) NOT NULL,

    CONSTRAINT "subkategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kata" (
    "id" SERIAL NOT NULL,
    "kata" VARCHAR(100) NOT NULL,
    "url_video" VARCHAR(100) NOT NULL,
    "penjelasan" VARCHAR(500) NOT NULL,
    "nama_kategori" VARCHAR(50) NOT NULL,
    "nama_sub_kategori" VARCHAR(50) NOT NULL,

    CONSTRAINT "kata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "riwayat_belajar" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "url_video" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id_kata" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "riwayat_belajar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "kategori_nama_kategori_key" ON "kategori"("nama_kategori");

-- CreateIndex
CREATE UNIQUE INDEX "subkategori_nama_sub_kategori_key" ON "subkategori"("nama_sub_kategori");

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kata" ADD CONSTRAINT "kata_nama_kategori_fkey" FOREIGN KEY ("nama_kategori") REFERENCES "kategori"("nama_kategori") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kata" ADD CONSTRAINT "kata_nama_sub_kategori_fkey" FOREIGN KEY ("nama_sub_kategori") REFERENCES "subkategori"("nama_sub_kategori") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat_belajar" ADD CONSTRAINT "riwayat_belajar_id_kata_fkey" FOREIGN KEY ("id_kata") REFERENCES "kata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "riwayat_belajar" ADD CONSTRAINT "riwayat_belajar_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
