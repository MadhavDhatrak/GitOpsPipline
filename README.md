# GitOps Project

This repository contains a **GitOps-based deployment setup** for a full-stack application with frontend and backend components. The project leverages Kubernetes, Helm, and ArgoCD to automate application deployments and lifecycle management using Git as the source of truth.

---
<img width="1920" height="1080" alt="White Black Yellow Modern Animated Thank You for Watching Youtube Outro (2)" src="https://github.com/user-attachments/assets/75fbc6c2-3301-47e6-86cc-012563bdb5e2" />


---

## Project Overview

This project demonstrates how to implement GitOps principles to achieve consistent, automated, and declarative deployments of a full-stack web application.

- **Frontend:** React.js application
- **Backend:** Node.js REST API
- **Infrastructure:** Kubernetes cluster deployed via Helm charts
- **Configuration management & deployment:** GitOps workflow using ArgoCD and sealed secrets for secure handling of sensitive data

## Project Structure
```
.
├── .github/                  # GitHub-specific configurations
│   └── workflows/            # CI/CD pipeline definitions (build, test, deploy)
│
├── app/                      # Application source code
│   ├── frontend/             # React frontend application
│   └── backend/              # Node.js backend application
│
├── myapp/                    # Helm chart for Kubernetes deployment
│   ├── Chart.yaml            # Helm chart metadata
│   ├── values.yaml           # Default configuration values
│   └── templates/            # Kubernetes manifests (Deployments, Services, etc.)
│
├── docker-compose.yaml       # Local development setup
├── README.md                 # Project documentation
└── LICENSE                   # License information

```

## Prerequisites

Before using this project, ensure you have the following installed and configured:

- [Docker](https://www.docker.com/) - for containerizing the applications
- [Kubernetes cluster](https://kubernetes.io/docs/setup/) - local (e.g., minikube) or cloud
- [Helm](https://helm.sh/) - package manager for Kubernetes
- [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) - for GitOps continuous deployment
- [Sealed Secrets controller](https://github.com/bitnami-labs/sealed-secrets) - to manage secrets securely

## Local Development

To run the full application locally (both frontend and backend), simply use:
```js
docker-compose up
```
This command builds and starts the frontend and backend services, allowing you to work on the app without deploying to Kubernetes.

## Kubernetes Deployment

The application is deployed to Kubernetes using Helm charts located in the `myapp/` directory. This enables a declarative and parameterized deployment workflow.

### Deploy with Helm

1. Customize deployment values in `myapp/values.yaml` as needed.
2. Deploy using Helm with:
```
helm install myapp ./myapp
```

3. Manage upgrades with Helm for subsequent releases.

### GitOps Deployment with ArgoCD

- The application was created using the ArgoCD UI.
- ArgoCD automatically syncs cluster state with the Git repo, providing continuous deployment and rollback capabilities.
- Secrets are securely stored using Sealed Secrets; encrypted secrets are stored in Git safely.

## CI/CD

The `.github/workflows/` directory contains GitHub Actions workflows that:

- Build Docker images for frontend and backend
- Run tests
- Push container images to registry
- Update Helm chart versions or manifests for deployment
- Trigger ArgoCD syncs for GitOps deployment automation

## Security

- This project uses Sealed Secrets to encrypt secrets before committing to Git.
- Only the Sealed Secrets controller in the cluster can decrypt and apply these secrets securely.

## Useful Commands

| Command                          | Description                         |
|---------------------------------|-----------------------------------|
| `docker-compose up`              | Run frontend and backend locally   |
| `helm install myapp ./myapp`    | Deploy application to Kubernetes   |
| `helm upgrade myapp ./myapp`    | Upgrade deployed application       |
| `kubectl -n argocd get applications` | Check ArgoCD application status   |
| `kubectl get sealedsecrets`     | List sealed secrets in cluster     |

## Contributing

Contributions are welcome! Please create pull requests with clear descriptions for any improvements or fixes.
