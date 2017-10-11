# monPlan Challenge
This Part of the monPlan 2018 Summer Hiring Interview Process

# Dependencies (Installation)
1. NodeJS we suggest you use NVM (https://github.com/creationix/nvm)
2. Yarn (https://yarnpkg.com/en/docs/install)

# Instructions before starting the challenge
1. Fork this repository
2. Install Dependencies
3. cd into repository
4. Run `yarn` to install all pre-built packages
5. Run `yarn start` to begin rendering the website

# Your Goal
Your Goal is to design a 'Unit Handbook Viewer' where students are
able to search a unit code and then select a unit that they are interested in. 

After selecting an unit that they are interested in, they can view more information about that unit.

APIs have been provided below.

An example component of using the API using `fetch` polyfill is available as well. We recommend you to use `fetch` or `axios` however you are free to use any another library, just NO `ajax` or `jQuery`.

# API Calls
The following are some API calls that you may need

Base route: https://monplan-api-dev.appspot.com

# GET all units 
To get every unit do a API call, just do a GET request `/basic/units` 

# GET a specific unit by unit code
You get more information about a specific unit using
GET `/units/{unitCode}`
