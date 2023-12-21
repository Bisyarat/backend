# API for bisyarat app

# General
General Information : 
- Node JS v16.20.2
- Database PostgreSQL

# Library : 
- Express JS (Framework)
- Joi (Validation)
- Prisma (DB ORM)
- Winston (Logging)
- Bcrypt (Enkripsi) 
- UUID (Unique Identifier)

# API Requirement 

Berdasarkan ERD : https://drive.google.com/file/d/1lFyZGcsGReYsWIvZuB9BGFck4_BVBvn_/view?usp=sharing 


## user
- Register User
- Login User
- Update User
- Get Current User
- Logout User

## feedback_user
- Create Feedback
- Get All Feedback

## kategori
- Create Kategori
- Get All Kategori
- Get Kategori by ID

## sub_kategori
- Create Sub Kategori
- Get All Sub Kategori
- Get Sub Kategori by ID

## kata
- Create Kata
- Update Kata
- Delete Kata
- Get All Kata
- Get Kata and status
- Get Kata by ID

## riwayat_belajar_kata
- Create riwayat
- Update riwayat
- Delete riwayat
- Get current riwayat by ID Kata
- Get current riwayat

# API Specification

https://github.com/Bisyarat/backend/tree/main/docs 

# Cloud Services

## Deploy API
- App Engine

## Cloud Sql
- Postgre sql

## Cloud Storage
- Cloud storage for storing objects


