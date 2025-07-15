import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
 },
 eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},
  
  //distDir:'dist',
  //output: 'export',
  images:{
    
    remotePatterns:[
        {
            protocol: 'https',
            hostname: '*',
        }
    ]
}
};

export default nextConfig;
