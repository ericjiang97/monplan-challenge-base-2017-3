# monPlan Challenge
This Part of the monPlan 2018 Summer Hiring Interview Process

# Dependencies (Installation)
1. Node.js (https://nodejs.org) (we suggest you use NVM (https://github.com/creationix/nvm) to use our preferred Node.js version)
2. Yarn (https://yarnpkg.com/en/docs/install)

# Instructions before starting the challenge
1. Install required [Dependencies](#dependencies-installation)
2. Fork and clone this repository
3. `cd` into repository
4. Run `yarn` to install all pre-built packages
5. Run `yarn start` to begin rendering the website

You are **expected** to handle errors

# Your Goal
Your Goal is to design a 'Unit Handbook Viewer' where students are able to search a unit code and then select a unit that they are interested in. 

After selecting an unit that they are interested in, they can view more information about that unit.

APIs have been provided below.

An example component of using the API using `fetch` polyfill is available as well `/src/components/example`. We recommend you to use `fetch` or `axios` however you are free to use any another library, just NO `ajax` or `jQuery`.

Please make it pretty and user friendly as our project has to be this.

Please also follow the following commit guidelines to make it pretty: https://seesparkbox.com/foundry/semantic_commit_messages

You also have to make it device responsive using CSS.

You may want to use Redux as it will make it easier to use. HINT: this may actually improve your application ;)
# Good Tutorials to Follow
You can follow some of the tutorials below
- https://reactjs.org/ 
- http://redux.js.org/docs/introduction/ (NOTE: We believe that redux is slightly more important)

Some good tutorials on ReactJS and Redux:
- https://egghead.io/courses/react-fundamentals 
- https://egghead.io/courses/getting-started-with-redux 

# API Calls
The following are some API calls that you may need. **Some parts of the sample response has been hidden for brevity**

Base route: https://monplan-api-dev.appspot.com

# GET all units 
To get a list of all units, GET `/basic/units` 

```
[
   {
      "id":"000873e4-4141-44ba-95a5-10e319706beb",
      "unitName":"Master of aerospace engineering: project thesis A",
      "unitCode":"MAE5409",
      "faculty":"Faculty of Engineering",
      "creditPoints":6,
      "scaBand":2,
      "locationAndTime":[
         {
            "location":"Not Offered in 2017"
         }
      ]
   }, ...
   //more units hidden below
]
```
# GET a specific unit by unit code
You get more information about a specific unit using GET `/units/{unitCode}`
```
{
   "preqs":"VCE Mathematics Methods or Specialist Mathematics units 3 \u0026 4 with a study score of 25 or MTH1010.Note: For 2016 Further Mathematics with a study score of 35 will be accepted.",
   "creditPoints":6,
   "rules":[
      {
         "startDate":"1/01/2017",
         "status":"ACTIVE",
         "ruleSummary":"INCOMP-IW",
         "ruleString":"Incompatible with achievement in (I/W) {FIT1029}",
         "endDate":""
      },...
   ],
   "locationAndTime":[
      {
         "location":"Clayton",
         "time":[
            "First semester 2017 (Day)",
            "Second semester 2017 (Day)"
         ]
      },...
   ],
   "enjoyScore":3.47826087,
   "learnScore":3.390116526,
   "learnResponse":45,
   "proh":"FIT1029",
   "scaBand":2,
   "unitName":"Algorithms and programming fundamentals in python",
   "description":"This unit introduces programming fundamentals and the Python language to students. The unit provides a foundational understanding of program design and implementation of algorithms to solve simple problems...",
   "enjoyResponse":90,
   "faculty":"Faculty of Information Technology",
   "unitCode":"FIT1045",
   "eftsl":0.125
}
```
