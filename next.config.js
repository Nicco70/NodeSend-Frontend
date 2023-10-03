/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: 'http://127.0.0.1:4000',
    frontendURL: 'http://localhost:3000'
  }
}


module.exports = nextConfig
