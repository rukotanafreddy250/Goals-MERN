const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // or any route you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:9000', // The backend API's URL
      changeOrigin: true, // Allows you to set the origin of the host header to the target URL
    })
  );
};
