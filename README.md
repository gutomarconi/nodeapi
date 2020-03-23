# About 

Node API exercise

NodeJS API service that return the user stats about their purchases against the others users purchases for the same merchants.

# Setup

* Clone this repository 
* Open a command line prompt and execute:
* Run 'npm install'
* Run 'npm run start'

- By default the service will be running at port 3008.
- The service will be live on http://localhost:3008/api
- There is a SQL database with almost 700 users, 2,000 merchants and 10,000 transactions linked to this service with no need for configuration.
- There are two main options to execute the service:
  1. Through the web browser
  2. Through Postman application
- The API documentation is available on api-documentation.txt in this repository.
  

# Tests
  
  * To run the tests run "npm run test"
  
# Features

* GET /userstats/:userid - Given user stats
* GET /users/:id - List of all users or if given parameter return that user
* GET /merchant/:id - List of all merchant
* GET /transactions/:id - List of all transactions (Limited to 1000 records)
