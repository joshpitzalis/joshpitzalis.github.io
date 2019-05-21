module.exports = {
  target: "serverless",
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/joshpitzalis.github.io" : ""
};
