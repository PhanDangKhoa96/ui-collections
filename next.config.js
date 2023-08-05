/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
        // enable AVIF support
        formats: ["image/avif", "image/webp"],
        // allow SVG type
        dangerouslyAllowSVG: true,
    },
}

module.exports = nextConfig
