/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                has: [{type: ""}],
                destination: "/ui-collection",
                permanent: true,
            },
        ]
    },
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
