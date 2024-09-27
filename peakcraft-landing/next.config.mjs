/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath:'/Peak-Craft',
    assetPrefix: 'https://peak-craft.github.io/Peak-Craft',
};

export default nextConfig;
