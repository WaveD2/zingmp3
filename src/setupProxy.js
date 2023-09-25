const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://wavedzingmp3.vercel.app/",
      changeOrigin: true,
    })
  );
};
