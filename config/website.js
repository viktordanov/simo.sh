const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Simo Aleksandrov ~ Mobile & Web developer  ', // Navigation and Site Title
  siteTitleAlt: 'Simo Aleksandrov', // Alternative Site title for SEO
  siteTitleShort: 'simo.sh', // short_name for manifest
  siteHeadline: 'I make cool shit.', // Headline for schema.org JSONLD
  siteUrl: 'https://simo.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: `I'm mobile & developer from Ruse, Bulgaria.`,
  author: 'Simo Aleksandrov', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@fr3fou', // Twitter Username
  ogSiteName: 'simo.sh', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-119885780-2',

  // Manifest and Progress color
  themeColor: tailwind.colors.pink,
  backgroundColor: tailwind.colors['teal-light']
};
