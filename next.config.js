/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Enable image optimization
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Headers configuration
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://*.razorpay.com https://www.googletagmanager.com",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "img-src 'self' data: https: blob:",
                            "font-src 'self' https://fonts.gstatic.com",
                            "connect-src 'self' https://*.razorpay.com https://*.google-analytics.com",
                            "frame-src 'self' https://*.razorpay.com",
                            "prefetch-src 'self'",
                        ].join('; ')
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    },
                    {
                        key: 'Link',
                        value: [
                            '<https://www.googletagmanager.com>; rel=preconnect',
                            '<https://checkout.razorpay.com>; rel=preconnect',
                            '<https://fonts.googleapis.com>; rel=preconnect',
                            '<https://fonts.gstatic.com>; rel=preconnect'
                        ].join(', ')
                    }
                ]
            }
        ];
    },

    // Webpack optimization
    webpack: (config, { dev, isServer }) => {
        // Production optimizations
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 244000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // Safe guard against null/undefined module.context
                                if (!module.context) return 'vendor';

                                // Extract package name safely
                                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                                if (!match) return 'vendor';

                                const packageName = match[1];
                                return `vendor.${packageName.replace('@', '')}`;
                            },
                            priority: 10,
                            reuseExistingChunk: true,
                        },
                    },
                },
            };
        }

        // Add fallback for node modules
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
            tls: false,
            dns: false,
        };

        return config;
    },

    // Performance optimizations
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    productionBrowserSourceMaps: false,
};

// Suppress punycode warning
process.env.NODE_NO_WARNINGS = '1';

module.exports = nextConfig;
