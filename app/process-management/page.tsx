export default function ProcessManagement() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-8">
          Process Management in Next.js
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          Learn how to manage processes for your Next.js application, from development to production.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Development Mode
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            In development, Next.js provides hot reloading and error reporting. Use the following command:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
            npm run dev
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            This starts the development server on <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">http://localhost:3000</code>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Building for Production
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Before deploying, build your application:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
            npm run build
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            This creates an optimized production build in the <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">.next</code> folder.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Running in Production
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Start the production server:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
            npm run start
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            This serves the built application on port 3000 by default.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Using PM2 for Process Management
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            PM2 is a process manager for Node.js applications. Install it globally:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
            npm install -g pm2
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 mb-4">
            Create an ecosystem file (ecosystem.config.js):
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
{`module.exports = {
  apps: [{
    name: 'nextjs-app',
    script: 'npm run start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}`}
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 mb-4">
            Start the application with PM2:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
            pm2 start ecosystem.config.js
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            Other useful PM2 commands: <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">pm2 list</code>, <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">pm2 restart nextjs-app</code>, <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">pm2 stop nextjs-app</code>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
            Environment Variables
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Use environment variables for configuration. Create a <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">.env.local</code> file for local development:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-sm font-mono text-black dark:text-zinc-50 overflow-x-auto">
{`NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:password@localhost:5432/db`}
          </pre>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            Access them in your code using <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">process.env.NEXT_PUBLIC_API_URL</code>.
          </p>
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
