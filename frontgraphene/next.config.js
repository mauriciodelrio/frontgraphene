module.exports = {
    env: {
        STRAPI_API_URL: process.env.STRAPI_API_URL || "http://localhost:1337/api",
        STRAPI_API_URL_WITH_POPULATE: process.env.STRAPI_API_URL_WITH_POPULATE || "http://localhost:1337/api?populate=*",
        IMAGES_URL: process.env.IMAGES_URL || "localhost",
    },
    images: {
        domains: [process.env.IMAGES_URL || "localhost"],
        path: "/_next/image",
        loader: "default",
        deviceSizes: [320, 768, 1024, 1200, 1600],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 512],
    }
};
