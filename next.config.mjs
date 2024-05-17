/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'th-a.kakaopagecdn.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  