# Kategori API Spec

## Create Kategori
Endpoint : POST /api/kategori

Request Body :

```json
{
    "nama_kategori" : "Kata",
    "penjelasan" : "Pada bagian ini berisi kata ...."
}
```

Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "nama_kategori" : "Kata",
    "penjelasan" : "Pada bagian ini berisi kata ...."
  }
}
```

Response Body Error :

```json
{
  "errors": "Forbidden"
}
```
## Get All Kategori

Endpoint : GET /api/kategori


Response Body Success :

```json
{
  "data": [
    {
    "id" : "1",
    "nama_kategori" : "Kata",
    "penjelasan" : "Pada bagian ini berisi kata ...."
  } , 
  {
    "id" : "2",
    "nama_kategori" : "Kalimat",
    "penjelasan" : "Pada bagian ini berisi kalimat ...."
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


## Get Kategori by ID

Endpoint : GET /api/kategori/:id


Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "nama_kategori" : "Kata",
    "penjelasan" : "Pada bagian ini berisi kata ...."
    }
    
}
```

Response Body Error :

```json
{
  "errors": "Not Found"
}
```