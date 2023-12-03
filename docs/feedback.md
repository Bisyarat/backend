# Feedback API Spec

## Create Feedback
Endpoint : POST /api/feedback

Headers :

- Authorization : token

Request Body :

```json
{
    "keterangan" : "Aplikasi ini membutuhkan ..."
}
```

Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "keterangan": "Aplikasi ini membutuhkan ...",
    "username" : "test"

  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
## Get All Feedback

Endpoint : GET /api/feedback

Response Body Success :

```json
{
  "data": [
    {
    "id" : "1",
    "keterangan": "Aplikasi ini membutuhkan ...",
    "username" : "test"

  } , 
  {
    "id" : "2",
    "keterangan": "Aplikasi ini membutuhkan ...",
    "username" : "test"

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