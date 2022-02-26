module.exports = {
  apps: [
    {
      name: 'laforme',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        API: 'http://localhost:4000',
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
        API: 'http://46.36.222.230:4000',
      },
    },
  ],
};
