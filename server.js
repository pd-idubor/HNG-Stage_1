const express = require('express');
const cors = require('cors');
const http = require('http');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

app.use(cors());

// Check for prime numbers
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Check for perfect numbers
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) sum += i;
	if (i !== num/i) {
          sum += num/i;
	}
    }
    return sum === num;
};

// Check for Armstrong numbers
const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
    const val = (sum === num);
    return ({val, sum});
};

// Retrieve fun fact
const getFunFact = async (num) => {
  const url = `http://numbersapi.com/${num}/math`;

  const response = await fetch(url);
  const data = await response.text();
  return data;
};


app.get('/api/classify-number', async (req, res) => {
  try {
    const number = +(req.query.number);
    console.log(number);
    console.log(typeof(number)); 
    //Number Check
    if (isNaN(number) || typeof(number) !== 'number' || !Number.isInteger(number)) {
      return res.status(400).json({
	'number': req.query.number,
	'error': true
      });
    };
    
    //Properties
    const properties = [];
    const armValues = isArmstrong(-(number));
    if (armValues['val']) properties.push('armstrong');
    if (number % 2 == 0) {
      properties.push('even');
    } else {
        properties.push('odd');
    }
   
    //Response Object
    const response = {
      'number': number,
      'is_prime': isPrime(number),
      'is_perfect': isPerfect(number),
      'properties': properties,
      'digit_sum': armValues['sum'],
      'fun_fact': await getFunFact(number)
    }

    res.status(200).send(response);
  } catch (err) {
  console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

