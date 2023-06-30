const { Router } = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = Router();

router.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:5002",
    changeOrigin: true,
  })
);

router.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:5001",
    changeOrigin: true,
  })
);

router.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:5003",
    changeOrigin: true,
  })
);

module.exports = router;
