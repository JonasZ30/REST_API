# Prometheus Metrics & Random Data Fetcher

This project demonstrates how to implement a simple API metrics collection system with Prometheus and a frontend for dynamically fetching and displaying random data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Metrics API](#running-the-metrics-api)
  - [Using the Random Data Fetcher](#using-the-random-data-fetcher)
- [Code Explanation](#code-explanation)
  - [promMetric.js](#prommetricjs)
  - [randomData.js](#randomdatajs)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository includes:

- **`promMetric.js`**: A Node.js application that tracks and exposes metrics like REST API response times using Prometheus-compatible metrics.
- **`randomData.js`**: A JavaScript frontend script that fetches and displays random data from an external API, triggered by user interaction.

## Features

- **Prometheus Integration**: Easily collect and expose metrics for your API.
- **Dynamic Data Fetching**: Frontend script to fetch and display random data categories like Users, Banks, and more.
- **Express.js Backend**: Simple REST API built with Express.js.

# Express.js Prometheus Monitoring Example

This repository contains a simple Express.js application that demonstrates how to integrate Prometheus metrics collection using the `prom-client` library. The application defines custom metrics for monitoring the response times of REST API endpoints and database operations.

## Features

- **Custom Metrics**: Collects and exposes metrics related to REST API response times and database response times.
- **Default Metrics**: Automatically collects and exposes default metrics like CPU usage, memory usage, and more.
- **Prometheus Integration**: Exposes metrics in a format that Prometheus can scrape and monitor.
- **Sample Endpoints**: Includes basic sample endpoints to test the monitoring setup.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/express-prometheus-example.git
   cd express-prometheus-example
   ```
2. Install dependencies:
    ```sh
    npm install express prom-client
    ```