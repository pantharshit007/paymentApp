# paymentApp

A simple demo payment app inspired by payTM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Todo](#todo)

## Installation

1. Clone the repository.

   ```bash
   git clone https://github.com/pantharshit007/paymentApp
   ```

2. Navigate to the project directory in 2 different Terminal.

   ```bash
   cd frontend
   ```

   ```bash
   cd backend
   ```

3. Install dependencies.
   ```bash
   npm install
   ```

## Usage

In order to run the app on your system you will be required to have a mongoDb url handy and other environment variables. You will be able to find them in `.env.example` file in **/backend**

```
MONGODB_URL =
PORT =
JWT_SECRET =
```

Once all requirement are full-filled just run the below command in both terminals:

```
npm run dev
```

> hope you won't stuck on any error even if you do it will be most likely in backend. ✨

## Features

- user can create account (`SignIn/Signup`)
- transfer money to different user (Dynamic Searching)
- user Authentication via `jwt` token
- proper notification or error/successful events

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Todo

- Enable OTP based Authentication of Email, so that DB doesn't populate with random test emails
- This will be easier since first TODO is done: send a mail to user's email everytime a transaction is initiated.

## धन्यवाद (Thankyou) ✨

---
