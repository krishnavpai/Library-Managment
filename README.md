# Library Management API

This is a simple library management API that allows users to perform various operations such as borrowing books, checking availability, searching for books, and adding new books. The API uses MySQL for data storage and JWT authentication for user authorization.

## Prerequisites

To run this API, you need to have the following installed on your machine:

- Node.js
- MySQL


## API Endpoints

### User Login

- **URL:** `/login`
- **Method:** `POST`
- **Request Body:**
  - `username` - User's username
  - `password` - User's password
- **Response:**
  - `token` - JWT token for authentication

### Borrow a Book

- **URL:** `/books/:id/borrow`
- **Method:** `POST`
- **Authorization:** JWT token
- **Response:** Message indicating the success of the borrowing operation

### Get Book Availability

- **URL:** `/books/:id/availability`
- **Method:** `GET`
- **Response:** JSON object with `available` property indicating the availability of the book

### Search for Books

- **URL:** `/books`
- **Method:** `GET`
- **Query Parameters:**
  - `title` - (required) Search keyword for book titles
- **Response:** JSON array containing the matching books

### Add a New Book

- **URL:** `/books`
- **Method:** `POST`
- **Authorization:** JWT token
- **Request Body:**
  - `title` - Title of the book
  - `author` - Author of the book
- **Response:** Message indicating the success of the book addition operation
