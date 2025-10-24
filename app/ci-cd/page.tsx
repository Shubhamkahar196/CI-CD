export default function CICDPipeline() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-8">
          CI/CD for Next.js Projects
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          Learn how to set up Continuous Integration and Continuous Deployment for your Next.js application.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            What is CI/CD?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            CI/CD automates the process of integrating code changes, running tests, and deploying applications. It ensures code quality and faster delivery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            GitHub Actions for CI/CD
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Create a workflow file at <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">.github/workflows/ci-cd.yml</code>:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
{`name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run lint
    - run: npm run build`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Deployment to Vercel
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Vercel offers seamless deployment for Next.js. Add deployment to your workflow:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
{`  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: \${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`}
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            Set up secrets in your GitHub repository settings for Vercel deployment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Alternative Deployment Options
          </h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
            <li><strong>Netlify:</strong> Drag-and-drop deployment or connect to Git repository.</li>
            <li><strong>Heroku:</strong> Use Heroku CLI or Git push for deployment.</li>
            <li><strong>AWS Amplify:</strong> Connect to Git repository for automatic builds and deployments.</li>
            <li><strong>Docker:</strong> Containerize your app and deploy to any container platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>Run tests on every push and pull request.</li>
            <li>Use semantic versioning for releases.</li>
            <li>Implement code quality checks (linting, formatting).</li>
            <li>Set up monitoring and error tracking in production.</li>
            <li>Use environment-specific configurations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Example Dockerfile for Containerized Deployment
          </h2>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
{`FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]`}
          </pre>
        </section>

        <div className="mt-8">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
