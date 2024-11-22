/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("hexoid");

    return config;
  },
};
