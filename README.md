![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: Vanilla REST API
======

### Author

Timea Heidenreich

[![Build Status](https://travis-ci.com/theidi267/09-persistence.svg?branch=master)](https://travis-ci.com/theidi267/09-persistence)


- Github Repo: [https://github.com/theidi267/08-rest](https://github.com/theidi267/08-rest)
- Herouku app: [https://rest-08.herokuapp.com/](https://rest-08.herokuapp.com/)
- Travis Built: [https://travis-ci.com/theidi267/09-persistence](https://travis-ci.com/theidi267/09-persistence)

### Project

Build a RESTful HTTP server that handles GET and POST requests.

### Language, Tech/Framework used

* Written in JavaScript with ES6

* Node.js
* Jest
* Eslint
* dotenv
* uuid

### How to use

- Fork and Clone Repository,
- ```npm install```
- Create a ```.env``` file and add ```PORT=3000``` in it
- Start the server with ```npm run start```
- For testing run ```npm run test```

### POST request

- Start the server
- Type the follwing command: ```echo '{"title":"go home", "content":"now"}' | http post http://localhost:3000/data```
- You should receive a status code 200 and an object with the title and content you wrote
```
{"title":"go home","content":"now"}
```

### GET request

- Start the server
- Type the follwing command: ```http http://localhost:3000```
- You should receive a status code 200 and the string 
```
Hello World
```

### Testing

#### parser.test.js 
- containes four tests of the parser module testing that it in deed requres and returns request objects

#### router.test.js
- contains three tests on it's functionality of registering and creating different routes

### Credits

* Code Fellows / John Cokos for providing the starter code.
