### Number Classification API

#### Overview

The Number Classification API is a simple RESTful API built with Node.js and Express. It takes a number as input and returns interesting mathematical properties about that number, along with a fun fact. The API also handles CORS (Cross-Origin Resource Sharing) to allow requests from different origins.

#### Features

- Checks if a number is prime.
- Checks if a number is perfect.
- Identifies Armstrong numbers.
- Calculates the sum of digits.
- Returns a fun fact about the number.
- Handles invalid inputs gracefully.

#### Installation

##### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

##### Steps to Install

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

4. **Access the API:**

   Open your browser or use a tool like Postman to access the API at:

   ```
   http://localhost:5000/api/classify-number?number=<your-number>
   ```

#### Usage

##### Endpoint

**GET** `/api/classify-number?number=<your-number>`

##### Query Parameters

- `number`: The number to classify (required).

##### Response Format

###### Successful Response (200 OK)

```json
{
    "number": <input_number>,
    "is_prime": <boolean>,
    "is_perfect": <boolean>,
    "properties": ["<property1>", "<property2>", ...],
    "digit_sum": <integer>,
    "fun_fact": "<fun_fact>"
}
```

###### Error Response (400 Bad Request)

```json
{
    "number": "<input_type>",
    "error": true
}
```

##### Example Requests

1. **Valid Request:**
   ```
   GET http://localhost:3000/api/classify-number?number=371
   ```

   **Example Response:**
   ```json
   {
       "number": 371,
       "is_prime": false,
       "is_perfect": false,
       "properties": ["armstrong", "odd"],
       "digit_sum": 11,
       "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
   }
   ```

2. **Invalid Request:**
   ```
   GET http://localhost:3000/api/classify-number?number=alphabet
   ```

   **Example Response:**
   ```json
   {
       "number": "alphabet",
       "error": true
   }
   ```

