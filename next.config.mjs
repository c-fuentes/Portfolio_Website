/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV;

const nextConfig = {
    images:{unoptimized: true},
    basePath:"/Portfolio_Website",
    assetPrefix: isProd ? '/Portfolio_Website' : "",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
