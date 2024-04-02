## TODO:

- Hashing of Password in Db
- Fixing the issue with the transaction in Db (right now Transaction feature can't be implemented)

### Endpoint 1: Create Account

#### Request

POST `/api/v1/user/signup`

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
  success: true,
  msg: "User created successfully",
  token: token,
}
```

### Endpoint 2: Transfer Money

#### Request

POST `/api/v1/account/transfer`

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
  success: true,
  msg: "Transfrer Successful."
}
```
