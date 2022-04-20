const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      port: 'http://localhost:6000',
      changeOrigin: true,
    })
  );
};