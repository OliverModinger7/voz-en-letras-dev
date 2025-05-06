// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: 'next-frontend',
        cwd: './frontend',
        script: 'npm',
        args: 'start -- -p 3000',
      },
      {
        name: 'nest-backend',
        cwd: './backend',
        script: 'dist/main.js',
        interpreter: 'node',
      },
    ],
  };