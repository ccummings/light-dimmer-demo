var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm",
  bundlesPath: "public/dist"
}, {
  bundleAssets: true,
  minify: true
});
