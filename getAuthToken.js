const axios = require('axios');

const authUrl = 'http://20.244.56.144/test/auth';

const authDetails = {
    
        companyName: 'St Joseph Engineering College',
        clientID: '887cd249-9125-4a75-a4b9-266942d575a5',
        clientSecret: 'hXMQSUKVjFcxCSjM',
        ownerName: 'Anupama S',
        ownerEmail: 'anupamacks589@gmail.com',
        rollNo: '4SO21AI006'
    
};

axios.post(authUrl, authDetails)
  .then(response => {
    console.log('Authorization token received:', response.data);
  })
  .catch(error => {
    console.error('Error obtaining authorization token:', error.response ? error.response.data : error.message);
  });
