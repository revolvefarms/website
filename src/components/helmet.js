import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

class PageHelmet extends React.Component {
	render () {
	  return (
		<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						imageUrl
						description
						keywords
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="keywords" content={data.site.siteMetadata.keywords} />
				<title>{this.props.pageName + ' | ' + data.site.siteMetadata.title}</title>
				<html lang="en" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={this.props.pageTitle} /> />
				<meta
					itemprop="description"
					content={this.props.pageDescription}
				/>
				<meta itemprop="image" content={data.site.siteMetadata.imageUrl} /> />
			</Helmet>
		)}
	/>
	  );
	}
  };

export default PageHelmet;