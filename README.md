# Simple API App

A simple **Node.js** and **Express** API for managing orders.  
Designed to run in **AWS ECS** and deployed via **CodeDeploy** or other CI/CD pipelines.


## Overview

This application demonstrates a basic orders API using **Express**.  
It exposes a health check endpoint and `/api/orders` endpoints to list and retrieve individual orders.

It is containerized using Docker and integrates with AWS ECS, ECR, and CodeDeploy for automated deployment.

## Deployment

Deployment uses AWS ECS with task definitions, ECR for Docker images, and CodeDeploy for orchestrating service updates.

### Steps included in CI/CD:

* Push Docker images to AWS ECR
* Register new ECS task definitions
* Trigger ECS service updates via CodeDeploy
* Canary deployment for main branch, rolling updates for other branches


## CI/CD Workflow

The GitHub Actions workflow (.github/workflows/build-and-deploy.yaml) automates:

1. Branch environment detection
2. main → prod (canary deployment)
3. dev/test → dev (rolling update)
4. AWS authentication via OIDC
5. Docker build & push to ECR
6. ECS task definition registration
7. CodeDeploy deployment (canary/rolling)
8. Deployment monitoring (optional polling until success/failure)


## API Endpoints

### Health Check

* GET /health → Returns OK status
```
curl http://localhost:8080/health
# OK
```

### Orders API

* GET /api/orders → Returns a list of all orders

```
curl http://localhost:8080/api/orders
# [
#   { "id": 1, "item": "Laptop", "quantity": 1 },
#   { "id": 2, "item": "Phone", "quantity": 2 },
#   { "id": 3, "item": "Keyboard", "quantity": 3 }
# ]
```

* GET /api/orders/:id → Returns details of a single order
```
curl http://localhost:8080/api/orders/1
# { "id": 1, "item": "Monitor", "quantity": 1 }

```