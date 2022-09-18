const connect = require('connect');
const app = connect();

function homePage(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from NodeJS Application');
}

function htmlFile(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello from NodeJS Application as html</h1>');
}

function jsonFormat(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      message: 'Hello from NodeJS Application as json',
    })
  );
}

// app.use('/')
app.use('/html', htmlFile);
app.use('/json', jsonFormat);
app.use('/', homePage);

app.listen(3000);
