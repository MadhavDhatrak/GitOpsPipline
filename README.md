# GitOps Project

This repository contains a GitOps-based deployment setup for a full-stack application with frontend and backend components.

## Project Structure

- **app/** - Application source code
  - **frontend/** - React frontend application
  - **backend/** - Node.js backend application
- **myapp/** - Helm chart for Kubernetes deployment
- **gitops/** - ArgoCD configuration
- **.github/workflows/** - CI/CD pipelines

## Prerequisites

- Docker
- Kubernetes cluster (local or remote)
- Helm
- ArgoCD
- Sealed Secrets controller (for secure secret management)

## Local Development

To run the application locally:

```bash
docker-compose up
```

This will start both the frontend and backend services.

## Kubernetes Deployment

The application is deployed to Kubernetes using Helm charts located in the `myapp/` directory.

### Helm Chart Structure

- **Chart.yaml** - Chart metadata
- **values.yaml** - Default configuration values
- **templates/** - Kubernetes resource templates
  - Deployments, Services, ConfigMaps, and Secrets

