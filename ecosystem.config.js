// ecosystem.config.js
module.exports = {
  apps : [
    {
      name: "backend-nest",
      script: "dist/main.js",
      cwd: "./backend",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    },
    {
      name: "frontend-next",
      script: "npm",
      args: "start",
      cwd: "./modern-landing-page",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
