module.exports = {
  pathPrefix: '/',

  siteTitle: 'Kevin Legrand - Front-end developer',
  siteTitleAlt: 'Kevin Legrand',
  siteUrl: 'https://k-legrand.com',
  siteLogo: '/logos/icon-512x512.png',
  siteLanguage: 'en',
  siteDescription: 'Front-end developer working in Lyon, France',

  siteRss: '/rss.xml',
  userName: 'Manoz',
  userAvatar:
    'https://secure.gravatar.com/avatar/ef560d79761c5626beaa014c4beed5c8?size=512',
  userDescription:
    'My name is Kevin a.k.a Manoz. I am a Front-end developer who lives in Lyon, France. I work in a web agency who builds websites using Laravel, React or WordPress depending on our clients.',
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/Manoz',
      iconClassName: 'icn icn-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/Manoz',
      iconClassName: 'icn icn-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:manoz@outlook.com',
      iconClassName: 'icn icn-envelope',
    },
  ],

  copyright: `Copyright © ${new Date().getFullYear()} Kevin Legrand`, // Used in the RSS feed.

  siteFBAppID: '1409742559286111',
  siteGATrackingID: 'UA-46691801-2',

  userTwitter: '@manoz',
  ogSiteName: 'Kevin Legrand - Front-end developer',

  // Manifest and Progress color
  themeColor: '#387CC6',
  backgroundCOlor: '#663399',

  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DDo MMM YYYY', // Date format for display.
}
