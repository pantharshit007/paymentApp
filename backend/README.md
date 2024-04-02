## TODO:

- Hashing of Password in Db
- Fixing the issue with transaction in Db (right now Transaction feature can't be implemented)

### Endpoint 1: Create Account

#### Request

POST `/api/v1/user/signup`
Content-Type: application/json

```
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe@example.com",
  "password": "password123"
}

```

### Response

```
{
  "success": true,
  "message": "Account created successfully",
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe@example.com"
  }
}
```

### Endpoint 2: Transfer Money

#### Request

POST `/api/v1/transaction/transfer`
Content-Type: application/json
Authorization: Bearer `<JWT_TOKEN>`

```
{
  "recipientId": "recipient_user_id",
  "amount": 100
}
```

### Response

```
{
  "recipientId": "recipient_user_id",
  "amount": 100
}
```
