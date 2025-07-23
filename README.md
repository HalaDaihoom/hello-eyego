<!-- Deploy URL : http://ac7194e7984b240a78feb19f52f187b6-976663985.us-east-1.elb.amazonaws.com/ -->

# hello-eyego

Simple Node.js app that returns “Hello Eyego”.

## Tech Stack
- Node.js API
- Docker
- Kubernetes 
- GitHub Actions (CI/CD)
- AWS ECR + EKS

## 🚀 Deployment
1. `eksctl create cluster ...`
2. Push image to ECR
3. Apply Kubernetes manifests
4. Access via LoadBalancer URL

## 📦 CI/CD
- Automated with GitHub Actions on `push to main`

