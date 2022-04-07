/** @type {import('next').NextConfig} */
// const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true
}

// module.exports = withPlugins([
//     webpack: (config) => {
//       config.node = {
//         fs: "empty",
//       };
//       config.module.rules.push({
//         test: /\.(glb|gltf|bin)$/,
//         use: {
//           loader: "file-loader",
//         },
//       });
//       config.plugins.push(
//         new webpack.ProvidePlugin({
//           $: "jquery",
//           jQuery: "jquery",
//           "window.jQuery": "jquery",
//         })
//       );
//       return config;
//     },
// ], nextConfig);



// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// const webpack = require("webpack");
// module.exports = withPlugins([withImages], {
//   webpack: (config) => {
//     config.node = {
//       fs: "empty",
//     };
//     config.module.rules.push({
//       test: /\.(glb|gltf|bin)$/,
//       use: {
//         loader: "file-loader",
//       },
//     });
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery",
//       })
//     );
//     return config;
//   },
// });

module.exports = nextConfig;
