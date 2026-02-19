Production CI/CD Pipeline for Node.js (GitHub Actions · SonarQube · PM2)

A production-grade CI/CD pipeline built from scratch for a Node.js application, demonstrating real-world DevOps practices including automated testing, static code analysis, secure deployments, and zero-downtime process management.

This project reflects how modern engineering teams build, test, analyze, and deploy applications in production environments.

🎯 Project Objective

Design and implement a fully automated CI/CD pipeline that:

Ensures code quality and security

Prevents broken code from reaching production

Deploys safely and automatically on every push

Mimics real-world DevOps workflows used in industry

🧠 Key Skills Demonstrated

CI/CD Pipeline Design

GitHub Actions (YAML workflows)

Secure SSH-based deployment

Static Code Analysis (SonarQube)

Test Automation (Jest)

Process Management & Zero-Downtime Deployments

Linux Server Administration

Debugging real-world CI failures

🧱 Tech Stack
Category	Tools
Runtime	Node.js, Express
Testing	Jest, Supertest
CI/CD	GitHub Actions
Code Quality	SonarQube
Deployment	SSH, PM2
Infrastructure	Linux (Ubuntu), Docker
Version Control	Git, GitHub
📁 Project Structure
node-cicd-lab/
├── src/
│   ├── app.js          # Express app (routes & logic)
│   ├── server.js       # App bootstrap
│   └── utils.js        # Business logic (unit tested)
├── tests/
│   ├── app.test.js     # Integration tests
│   └── filterUsers.test.js # Unit tests
├── .github/workflows/
│   └── ci-cd.yml       # GitHub Actions pipeline
├── ecosystem.config.js # PM2 production config
├── sonar-project.properties
└── README.md

⚙️ CI/CD Workflow (End-to-End)
Trigger

Every push to the main branch

Pipeline Stages

Checkout code

Install dependencies

Run automated tests

Run SonarQube static analysis

Secure SSH deployment

PM2 zero-downtime reload

Developer → GitHub → CI → Tests → SonarQube → Deploy → Production

🔍 Code Quality & Security (SonarQube)

Static code analysis

Bug detection

Security vulnerability detection

Code smell identification

Quality gate enforcement

🚫 Deployment is blocked automatically if quality checks fail.

🔁 Production Deployment with PM2

Cluster mode for high availability

Automatic restarts on failure

Memory usage protection

Zero-downtime reloads

Centralized logs

PM2 ensures the application remains stable and available during deployments.

🔐 Secure Secrets Management

All sensitive data is handled via GitHub Actions Secrets:

Secret	Purpose
SONAR_TOKEN	SonarQube authentication
SONAR_HOST_URL	SonarQube server
DEPLOY_HOST	Production server IP
DEPLOY_USER	SSH user
DEPLOY_SSH_KEY	Encrypted private key

✔️ No secrets are hardcoded
✔️ CI follows security best practices

🧪 Testing Strategy

Unit Tests for business logic

Integration Tests for API endpoints

Tests executed automatically in CI

Failures immediately stop deployment

🚀 Local Development
npm install
npm test
npm start

🖥️ Production Commands (PM2)
pm2 start ecosystem.config.js
pm2 status
pm2 logs node-cicd-lab
pm2 reload ecosystem.config.js

🏆 What Makes This Project Stand Out

✔ Built without templates or generators
✔ Debugged real CI/CD issues (SSH, tokens, permissions)
✔ Uses industry-standard tools
✔ Demonstrates end-to-end DevOps ownership
✔ Production-focused, not tutorial-level

📌 Potential Enhancements

Dockerized application deployment

Nginx + HTTPS (SSL)

Canary or blue-green deployments

Rollback on failed deploy

Monitoring & alerting integration

👤 Author

Shishir
DevOps Engineer | CI/CD | Cloud | Node.js
