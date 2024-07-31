const pageComponents = {
  header: '//*[@id="site-navigation"]',
  footer: '//*[@id="vcc-site-footer"]',
  cookiesAcceptButton: '//*[@id="onetrust-accept-btn-handler"]',
};

export const sliderWithIconsSelectors = {
  title1: '//*[@data-autoid="sliderWithIcons:title1"]',
  title2: '//*[@data-autoid="sliderWithIcons:title2"]',
  title3: '//*[@data-autoid="sliderWithIcons:title3"]',
  card1: "sliderWithIcons:card1",
  card2: "sliderWithIcons:card2",
  card3: "sliderWithIcons:card3",
  heading: (parentId: string) =>
    `//*[@data-autoid="${parentId}"]//*[@data-autoid="sliderWithIcons:headline"]`,
  description: (parentId: string) =>
    `//*[@data-autoid="${parentId}"]//*[@data-autoid="sliderWithIcons:text"]`,
  image: (parentId: string) =>
    `//*[@data-autoid="${parentId}"]//*[@data-autoid="sliderWithIcons:image"]`,
  springCarouselNextButton: '//*[@data-autoid="SpringCarouselArrow:right"]',
  springCarouselPreviousButton: '//*[@data-autoid="SpringCarouselArrow:left"]',
};

export const campaignSelectors = {
  pageComponents,
  campaignElements: {
    "ModelIntro-1": '//*[@data-autoid="ModelIntro-1"]',
    "LocalSubmenu-1": '//*[@data-autoid="LocalSubmenu-1"]',
    "ModelIntro-2": '//*[@data-autoid="ModelIntro-2"]',
    "Hero-1": '//*[@data-autoid="Hero-1"]',
    "ModelIntro-3": '//*[@data-autoid="ModelIntro-3"]',
    "TextStatement-1": '//*[@data-autoid="TextStatement-1"]',
    "SliderWithIcons-1": '//*[@data-autoid="SliderWithIcons-1"]',
    "ModelIntro-4": '//*[@data-autoid="ModelIntro-4"]',
    "Hero-2": '//*[@data-autoid="Hero-2"]',
    "ModelIntro-5": '//*[@data-autoid="ModelIntro-5"]',
    "MediaHighlights-1": '//*[@data-autoid="MediaHighlights-1"]',
    "Disclaimer-1": '//*[@data-autoid="Disclaimer-1"]',
  },
  LocalSubmenuLinks: '//*[@data-autoid="LocalSubmenu-1"]//a',
  FirstLocalSubmenuLink: '//*[@data-autoid="LocalSubmenu-1"]//a[1]',
};
