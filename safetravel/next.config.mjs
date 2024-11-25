/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ''
            }, {
                protocol: 'https',
                hostname: 'image.pollinations.ai',
                port: ''
            }
        ]
    }
};

export default nextConfig;
