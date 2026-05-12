export const SITE = {
  website: "https://0xpa3lo.github.io/",
  author: "Paolo Zivic",
  profile: "https://0xpa3lo.github.io/",
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
    url: "https://github.com/0xpa3lo/0xpa3lo.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Europe/Rome",
} as const;
