// Horse Racer AI API
// Main entry point for the API server

const http = require('http');

const PORT = process.env.PORT || 3000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/' && req.method === 'GET') {
    res.end(JSON.stringify({ 
      message: 'Horse Racer AI API',
      version: '1.0.0',
      status: 'running'
    }));
  } else if (req.url === '/health' && req.method === 'GET') {
    res.end(JSON.stringify({ 
      status: 'healthy',
      timestamp: new Date().toISOString()
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Horse Racer AI API server running on port ${PORT}`);
});
