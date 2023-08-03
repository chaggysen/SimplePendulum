# Pendulum Simulation

<img width="1440" alt="Screenshot 2023-08-03 at 1 04 49 PM" src="https://github.com/chaggysen/SimplePendulum/assets/59708469/d3e5c6ff-7f5c-4e7f-b406-7548263c64ef">


A simple pendulum simulation using a backend built on Node.js and a frontend visualization built with vanilla JavaScript. The backend provides an approximation of pendulum movement using the small angle approximation method.

The time-dependent angle \( \theta(t) \) for a simple pendulum, when it's displaced by a small initial angle \( \theta_0 \) and then released, is given by:

\[ \theta(t) = \theta_0 \cos\left(\sqrt{\frac{g}{l}} t\right) \]

Where:
- \( \theta(t) \) is the angle as a function of time.
- \( \theta_0 \) is the initial displacement angle.
- \( g \) is the acceleration due to gravity.
- \( l \) is the length of the pendulum.
- \( t \) is time.

## Table of Contents

- [REST Interface Documentation](#rest-interface-documentation)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Application](#running-the-application)
- [Testing the Backend](#testing-the-backend)

## REST Interface Documentation

### `POST /configure`

**Purpose**: Configure the pendulum settings.

**Request Body**:
- `theta0`: Initial angular displacement in radians.
- `length`: Length of the pendulum in meters.

**Response**: "Configured successfully."

### `GET /coordinates`

**Purpose**: Get the current angular displacement of the pendulum.

**Response**:
- `theta`: Angular displacement in radians.

## Prerequisites

- Node.js
- npm

## Setup

### Backend

1. Navigate to the `Backend` directory.
2. Install required packages:
```bash
npm install
```

### Frontend
The frontend doesn't require a special setup as it's built with vanilla JavaScript and CSS. Just ensure you have a web browser to open the HTML file.
(run with Live Server extension in Visual Studio Code to avoid CORS error).

## Running the Application

1. In the `Backend` directory, run 5 instances:
```bash
node pendulum.js 3000
node pendulum.js 3001
node pendulum.js 3002
node pendulum.js 3003
node pendulum.js 3004
```

2. Open the HTML file located in the `Frontend` folder with a web browser (or run with Live Server extension).
3. Use the buttons to control the pendulums. You can configure, start, pause, and stop the simulation.

## Testing the Backend
1. Ensure you're in the `Backend` directory.
2. Run:
```bash
npm test
```
This will execute the test cases written in pendulum.test.js.
