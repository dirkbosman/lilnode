# lilnode

A little vanilla node.js server and some tutorials to get you started :)


## Create a folder `exercises_vanila` then go to this folder in your terminal and execute:

```
npm init -y
```

## Exercise 0 ([Help - NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/))

- What file did you create with the previous command? package.json
- What is the role of this file? Plays package manager for node.

## Exercise 1 ([Help - console](https://nodejs.org/api/console.html))

- Create file `exercise1.js` with `nano exercise1.js`, and:
- Create a code that displays `Hello World!` in the console.
- To launch this file, type in your terminal `node exercise1.js`.

## Exercise 2 ([Help - fs](https://nodejs.org/api/fs.html))

- Create file `exercise2.js` with `nano exercise2.js`, and:
- Use the `writeFile` function, write `Hello World!` in a file called `test.html`.

## Exercise 3 ([Help - fs](https://nodejs.org/api/fs.html))

- In a file `exercise3.js`:
- Using the `readFile` function, read the file `test.html` and display the content in the console.

## Exercise 4 ([Help - fs](https://nodejs.org/api/fs.html))

- In a file `exercise4.js`; write the work done in the previous exercises in ES5 or ES6 (depending which version you used).

`function(err, data) {if (err) throw err;console.log(data);}`
VS
`(err, data) => {if (err) throw err; console.log(data);}`

## Exercise 5 ([Help - http](https://nodejs.org/api/http.html))

- In a file `exercise5.js`; copy this code and run it in the console.
- If you want to stop the server: `CNTR+C`.

```
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(80);
console.log("Server running at http://127.0.0.1:80/");
```

## Exercise 6

In a file `exercise6.js`:

- Install the module [axios](https://github.com/axios/axios): \$ `npm install axios`
- Retrieve the html code from `google.com`.
