const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "http://www.kspo.or.kr/openapi/service/sportsNewFacilInfoService/getNewFacilInfoList",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
