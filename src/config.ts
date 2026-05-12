export const SITE = {
  website: "https://0xpzivic.github.io/",
  author: "Paolo Zivic",
  profile: "https://0xpzivic.github.io/",
  desc: "Notes on building things — software, founders, and the occasional rabbit hole.",
  title: "Paolo Zivic",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Suggest an edit",
    url: "https://github.com/0xpzivic/0xpzivic.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Europe/Rome",
} as const;
