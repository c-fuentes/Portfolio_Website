/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV;

const nextConfig = {
    images:{unoptimized: true},
    basePath: isProd ? '/Portfolio_Website' : "",
    assetPrefix: isProd ? '/Portfolio_Website' : "",
    output: "export",
    reactStrictMode: true,
    images: {
    unoptimized: true
    },
};

export default nextConfig;
