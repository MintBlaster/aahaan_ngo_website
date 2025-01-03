module.exports = {
    siteUrl: 'https://aahanngo.org',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: [
        '/admin/*',
        '/login',
        '/signup',
        '/404',
        '/private/*',
        '/api/*'
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin',
                    '/private',
                    '/api',
                    '/login',
                    '/signup',
                    '/*.json$',
                    '/*.xml$'
                ]
            }
        ]
    },
    transform: (config, path) => {
        // Custom priority for different pages
        let priority = 0.7;
        if (path === '/') {
            priority = 1.0;
        } else if (path.startsWith('/blog/')) {
            priority = 0.8;
        } else if (path.startsWith('/projects/')) {
            priority = 0.9;
        }

        return {
            loc: path,
            changefreq:
                path === '/' ? 'daily' :
                    path.startsWith('/blog/') ? 'weekly' :
                        'monthly',
            priority: priority,
            lastmod: new Date().toISOString()
        };
    },
    additionalPaths: async (config) => [
        { loc: '/about-us', priority: 0.8, changefreq: 'monthly' },
        { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
        { loc: '/get-involved', priority: 0.9, changefreq: 'monthly' },
        { loc: '/support-us', priority: 1, changefreq: 'monthly' },
        { loc: '/our-programme', priority: 0.9, changefreq: 'monthly' }
    ]
};
