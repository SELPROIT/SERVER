const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT || 8080
const host = "10.18.83.41"

conn.sync({ alter: true }).then(() => {
  server.listen(port, host, () => {
    console.log(`%s listening at ${port}`);
  });
}); 
