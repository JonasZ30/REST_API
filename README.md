# Express.js Prometheus Metrics Server

This is an Express.js server application that sets up Prometheus metrics to monitor REST API 
performance and database operations. It includes endpoints for generating random user data, 
providing sample API responses, and exposing Prometheus metrics.

## Features

- **Prometheus Metrics**: Tracks REST API response times and database operation durations.
- **Random User Data**: Provides an endpoint to fetch randomly generated user data.
- **Static File Serving**: Serves static HTML files.
- **Sample API Response**: Delays response to simulate varying API response times.
- **Metrics Endpoint**: Exposes Prometheus metrics for monitoring.
- **Status Endpoint**: Provides a simple health check for the server.
- **Data Logging Endpoint**: Receives and logs posted data.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm
- [Prometheus](https://prometheus.io/download/)
- [Grafana](https://grafana.com/get/)


### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/JonasZ30/REST_API.git
   ```
2. Install dependencies:
    ```sh
    npm install express prom-client
    ```
### Running Application

Start the application by executing the following command. The application will run on `http://localhost:5000`.

   ```sh
   node path/to/restAPI.js
   ```

   *Terminate Port if port is being used* <br>
   **FIND PORT:**
   ```sh
   netstat -ano | findstr <PORT>
   ```
   **CLOSE PORT:**
   ```sh
   taskkill /PID <PID> /F
   ```
   

### Endpoints

- GET /random-data: Returns a JSON object with randomly generated user data.
- GET /api/sample: Returns a sample API response after a random delay.
- GET /metrics: Exposes Prometheus metrics in a format suitable for Prometheus scraping.
- GET /api/status: Returns a JSON object indicating the server status.
- POST /api/data: Receives and logs data sent in the request body, then responds with the same data.

### Monitoring with Prometheus

Add the following job to your prometheus.yml if not done yet:

   ```sh
    - job_name: "node_app"
        metrics_path: /metrics
        static_configs:
            - targets: ["localhost:5000"]
   ```

### Metrics

- REST API Response Time (rest_response_time_duration_seconds): A histogram that tracks the duration of HTTP requests. Labels include method, route, and status_code.
 
- Database Response Time (db_response_time_duration_seconds): A gauge that can be used to track the response time of database operations. Labels include operation and success.

### Visualizing Metrics with Grafana

1. Configure Prometheus as a data source in Grafana and set the prometheus server URL to `http://localhost:9090`
![alt text](./images/image.png)
2. Create dashboards to visualize the metrics exposed by the application, such as API response times and database operation durations.
![alt text](./images/image-1.png)

