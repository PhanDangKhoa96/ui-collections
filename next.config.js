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
        loader: "custom",
        loaderFile: "./src/components/CustomImageLoader",
    },
}

module.exports = nextConfig
