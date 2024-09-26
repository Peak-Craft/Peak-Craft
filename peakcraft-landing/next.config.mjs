/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath:'/.',
    assetPrefix: '/.',
};

export default nextConfig;
