const axios = require('axios');

const registerUrl = 'http://20.244.56.144/test/register';

const registrationDetails = {
    'companyName' : 'St Joseph Engineering College',
    'ownerName' : 'Anupama S',
    'rollNo' : '4SO21AI006',
    'ownerEmail': 'anupamacks589@gmail.com',
    'accessCode':'umHPpw'
  };
  
  axios.post(registerUrl, registrationDetails)
    .then(response => {
      console.log('Registration successful:', response.data);
    })
    .catch(error => {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
    });