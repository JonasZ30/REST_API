import express from 'express';
import { collectDefaultMetrics, Gauge, Histogram, register } from 'prom-client';

const app = express();
const port = 5000;

// Prometheus metrics setup
const restResponseTimeHistogram = new Histogram({
  name: 'rest_response_time_duration_seconds',
  help: 'REST API response time in seconds',
  labelNames: ['method', 'route', 'status_code'],
});

const databaseResponseTimeHistogram = new Gauge({
  name: 'db_response_time_duration_seconds',
  help: 'Database response time in seconds',
  labelNames: ['operation', 'success'],
});

// Collect default metrics (like CPU usage, memory usage, etc.)
collectDefaultMetrics();

// Middleware to measure response time for all requests
app.use((req, res, next) => {
  const end = restResponseTimeHistogram.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

function generateRandomUser() {
  const firstNames = ['John', 'Jane', 'Alice', 'Bob'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams'];
  const domains = ['example.com', 'mail.com', 'test.com', 'random.com'];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;

  return {
      id: Math.floor(Math.random() * 1000),
      uid: Math.random().toString(36).substr(2, 9),
      first_name: firstName,
      last_name: lastName,
      email: email,
  };
}

// Endpoint to get random user data
app.get('/random-data', (req, res) => {
  const user = generateRandomUser();
  res.json(user);
});

// Sample API response
app.get('/api/sample', (req, res) => {
  setTimeout(() => {
    res.send('Sample API response');
  }, Math.random() * 1000);
});

// Endpoint to expose Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  try {
    const metrics = await register.metrics();
    res.send(metrics);
  } catch (error) {
    res.status(500).send('Error fetching metrics');
  }
});

// Status endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK' });
});

// Endpoint to receive and log data
app.post('/api/data', express.json(), (req, res) => {
  res.json({ received: req.body });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
