import express from 'express';
import { collectDefaultMetrics, Gauge, Histogram, register } from 'prom-client';

const app = express();

// Define metrics
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

// Collect default metrics
collectDefaultMetrics();

app.use((req, res, next) => {
  const end = restResponseTimeHistogram.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

app.get('/api/sample', (req, res) => {
  setTimeout(() => {
    res.send('Sample API response');
  }, Math.random() * 1000);
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  try {
    const metrics = await register.metrics();
    res.send(metrics);
  } catch (error) {
    res.status(500).send('Error fetching metrics');
  }
});

app.get('/api/status', (req, res) => {
    res.json({ status: 'OK' });
  });
  
  app.post('/api/data', express.json(), (req, res) => {
    res.json({ received: req.body });
  });
  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
