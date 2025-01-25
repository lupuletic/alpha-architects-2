/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure CSS is properly handled
  optimizeFonts: false,
  compiler: {
    removeConsole: false,
  },
}

export default nextConfig
