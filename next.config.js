/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push('hexoid')
    return config
  }
}

module.exports = {
  ...nextConfig
}
