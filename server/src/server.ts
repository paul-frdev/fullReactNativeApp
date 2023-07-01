const http = require('http');
const mainApp = require('./app');
// const { loadTrendingMovies } = require('./models/movies.model');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(mainApp);

async function startServer() {
  // await loadTrendingMovies();

  server.listen(PORT, () => {
    console.log(`LIstening on port ${PORT}...`);
  });
}

startServer();
