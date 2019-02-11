module.exports = {
	siteMetadata: {
		title: 'Revolve Farms',
		author: 'Revolve Farms',
		imageUrl: 'https://www.dropbox.com/s/h59o8m37vsanpam/revolve-farms-main-logo.png?raw=1',
		description: 'Revolve Farms public website.',
		keywords: `Greenhouse, Energy Efficient, Year-Round Growth, Midwest, Climate Battery, Subterrainian Heating and Cooling System`,
		github: `https://github.com/revolvefarms`,
		facebook: 'https://www.facebook.com/RevolveFarms/',
		instagram: 'https://www.instagram.com/revolvefarms/',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.revolvefarms.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/revolve-farms-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
