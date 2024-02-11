const esbuildPluginTsc = require("esbuild-plugin-tsc");
module.exports = () => {
  /**
   * @type {import('esbuild').BuildOptions}
   */
  const config = {
    bundle: true,
    minify: true,
    external: ["@aws-sdk/*"],
    plugins: [esbuildPluginTsc()],
    resolveExtensions: [".ts", ".js", ".mjs"],
  };
  return config;
};
