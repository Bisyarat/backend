# Sub Kategori API Spec

## Create Sub Kategori
Endpoint : POST /api/subkategori

Request Body :

```json
{
    "nama_sub_kategori" : "Kata",
    "penjelasan" : "Pada bagian ini berisi kata ...."
}
```

Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "nama_sub_kategori" : "Warna",
    "penjelasan" : "Pada bagian ini berisi warna ...."
  }
}
```

Response Body Error :

```json
{
  "errors": "Forbidden"
}
```
## Get All Sub Kategori

Endpoint : GET /api/subkategori


Response Body Success :

```json
{
  "data": [
    {
    "id" : "1",
    "nama_kategori" : "Warna",
    "penjelasan" : "Pada bagian ini berisi warna ...."
  } , 
  {
    "id" : "2",
    "nama_kategori" : "Ekspresi",
    "penjelasan" : "Pada bagian ini berisi ekspresi ...."
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


## Get Sub Kategori by ID

Endpoint : GET /api/subkategori/:id


Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "nama_kategori" : "Warna",
    "penjelasan" : "Pada bagian ini berisi warna ...."
    }
    
}
```

Response Body Error :

```json
{
  "errors": "Not Found"
}
```