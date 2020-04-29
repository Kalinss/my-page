module.exports = {
    pathPrefix: "",
    siteMetadata: {
        title: `kalinss`,
        description: `Front End Developer`,
        author: `kalinss`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: 'Roboto',
                        variants: ['700','400']
                    },
                    {
                        family:'Open Sans',
                        variants:['300','400','700'],
                        subsets: [`latin`,'Cyrillic']
                    },
                    {
                        family:'Montserrat',
                        variants:['300','700','800','500']
                    }
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/emoji.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
