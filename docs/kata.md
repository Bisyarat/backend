# Kata API Spec

## Create Kata

Endpoint : POST /api/kata

Request Body :

```json
{
  "kata": "Satu",
  "url_video": "www.satu.mp4",
  "penjelasan": "Ini adalah bahasa isyarat untuk angka satu",
  "nama_kategori": "Angka",
  "nama_sub_kategori": "Angka"
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "kata": "Satu",
    "url_video": "www.satu.mp4",
    "penjelasan": "Ini adalah bahasa isyarat untuk angka satu",
    "nama_kategori": "Angka",
    "nama_sub_kategori": "Angka"
  }
}
```

Response Body Error :

```json
{
  "errors": "Kategori is wrong"
}
```


## Delete Kata

Endpoint : DELETE /api/kata/:id

Response Body Success :

```json
{
  "data": "Delete kata success"
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```

## Get All Kata

Endpoint : GET /api/kata

Response Body Success :

```json
{
  "data": [
    {
      "id": "1",
      "kata": "Satu",
      "url_video": "www.satu.mp4",
      "penjelasan": "Ini adalah bahasa isyarat untuk angka satu",
      "nama_kategori": "Angka",
      "nama_sub_kategori": "Angka"
    },
    {
      "id": "2",
      "kata": "Biru",
      "url_video": "www.biru.mp4",
      "penjelasan": "Ini adalah bahasa isyarat untuk warna biru",
      "nama_kategori": "Kata",
      "nama_sub_kategori": "Warna"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Get Kata by ID

Endpoint : GET /api/kata/:id

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "kata": "Satu",
    "url_video": "www.satu.mp4",
    "penjelasan": "Ini adalah bahasa isyarat untuk angka satu",
    "nama_kategori": "Angka",
    "nama_sub_kategori": "Angka"
  }
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```

