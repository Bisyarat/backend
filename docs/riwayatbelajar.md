# Riwayat Belajar API Spec

## Create Riwayat Belajar

Endpoint : POST /api/riwayat

Headers :

- Authorization : token

Request Body :

```json
{
  "status": "false",
  "url_video": "www.satu.mp4",
  "id_kata": "1"
}
```

Response Body Success :

```json
{
  "data": {
    "status": "false",
    "url_video": "www.satu.mp4",
    "id_kata": "1"
  }
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```

## Update Riwayat Belajar

Endpoint : PATCH /api/riwayat/:id_kata

Headers :

- Authorization : token

Request Body :

```json
{
  "status": "false", //optional
  "url_video": "www.satu.mp4" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "status": "false",
    "url_video": "www.satu.mp4",
    "id_kata": "1"
  }
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```

## Delete Riwayat Belajar

Endpoint : DELETE /api/riwayat/:id_kata

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "Delete riwayat success"
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```

## Get Current Riwayat

Endpoint : GET /api/riwayat

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": "1",
      "status": "false",
      "url_video": "www.satu.mp4",
      "kata": "Satu"
    },
    {
      "id": "2",
      "status": "true",
      "url_video": "www.dua.mp4",
      "kata": "Dua"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```

## Get Current Riwayat by ID Kata

Endpoint : GET /api/riwayat/:id_kata

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "status": "false",
    "url_video": "www.satu.mp4",
    "kata": "Satu"
  }
}
```

Response Body Error :

```json
{
  "errors": "Id is wrong"
}
```
