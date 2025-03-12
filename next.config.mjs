/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[

        {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
        },
        {
            protocol: 'https',
            hostname: 'fakestoreapi.com', // <-- Add this line to allow images from fakestoreapi.com
          },
        ]
    }
};

export default nextConfig;
