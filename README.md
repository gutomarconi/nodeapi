# About 

Node API exercise

NodeJS API service that return the user stats about their purchases against the others users purchases for the same merchants.

# Setup

* Clone this repository 
Open a command line prompt and execute:
* Run 'npm install'
* Run 'npm run start'

- By default the service will be running at port 3008.
- The service will be live on http://localhost:3008/api
- There is a SQL database with almost 700 users, 2,000 merchants and 10,000 transactions linked to this service with no need for configuration.
- There are two main options to execute the service:
  1. Through the web browser
  2. Through Postman application
- The API documentation is available here: 
  

# Features

* GET /userstats/:userid - Given user stats
Fetch user Stats
- Without query parameters:
http://localhost:3008/api/userstats/245
- With query parameters
http://localhost:3008/api/userstats/245?startDate=2019/01/01&endDate=2019/12/05

Query Parameters

Parameter	  Type	    Example     Default	Description
-----------------------------------------------------
startDate   String    2019/03/01  Start date for filter transactions
endDate     String    2019/03/31  End date for filter transactions
    
Response (JSON)
{
    "merchantId": 28,
    "userSpent": "12.14",
    "generalAverage": 30.79,
    "percentile": -60.58
},
{
    "merchantId": 235,
    "userSpent": "9.23",
    "generalAverage": 31.96,
    "percentile": -71.12
}

* GET /users/:id - List of all users or if given parameter return that user
Fetch users list
Parameters  Required
--------------------
id          No
http://localhost:3008/api/users/245
    
Response (JSON)
{
    "id": 28,
    "first_name": "12.14",
    "last_name": 30.79,
}

* GET /merchant - List of all merchant
Fetch merchants list
Parameters  Required
--------------------
id          No
http://localhost:3008/api/merchant/245
    
Response (JSON)
{
    "id": 28,
    "display_name": "merchant name",
    "icon_url": "url",
    "funny_gif_url": "url"
}

* GET /transactions - List of all transactions (Limited to 1000 records)
Fetch transactions list
Parameters  Required
--------------------
id          No
http://localhost:3008/api/transactions/245
    
Response (JSON)
{
    "id": 28,
    "user_id": "merchant name",
    "merchant_id": "url",
    "amount": 100.34,
    "date": 2019/03/23,
    "description": "Transaction description"
}
