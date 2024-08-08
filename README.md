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

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
```
import express from 'express';
import { collectDefaultMetrics, Gauge, Histogram, register } from 'prom-client';

const app = express();

```