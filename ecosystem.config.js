module.exports = {
  apps: [
    {
      name: 'laforme',
      script: './server.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        API: 'http://localhost:4000',
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
        API: 'https://api.laforme-patterns.com',
      },
    },
  ],
};
