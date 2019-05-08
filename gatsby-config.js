module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js',
            }
        },
        `gatsby-plugin-sass`,
        // {
        //     resolve: `gatsby-plugin-sass`,
        //     options: {
        //         implementation: require("sass"),
        //     },
        // },
        
    ]
}