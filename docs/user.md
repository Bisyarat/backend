# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "email": "test@gmail.com",
  "username": "test",
  "password": "pass",
  "name": "ini tes"
}
```

Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "email": "test@gmail.com",
    "username": "test",
    "name": "ini tes"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is already used , dll"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "email": "test@gmail.com",
  "password": "pass"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email or Password is wrong"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "email": "test@gmail.com", //optional
  "username": "test", // optional
  "password": "pass", // optional
  "name": "ini tes" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "email": "test@gmail.com",
    "username": "test",
    "name": "ini tes"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is already used , dll"
}
```

## Get Current User

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id" : "1",
    "email": "test@gmail.com",
    "username": "test",
    "name": "ini tes"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "Logout success"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
