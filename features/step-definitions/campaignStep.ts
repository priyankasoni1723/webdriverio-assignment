import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import CampaignPage from "../pageobjects/pageActions/campaign.page.ts";
import {
  campaignSelectors,
  mediaHighlightsSelectors,
  productCarouselSelectors,
  sliderWithIconsSelectors,
} from "../pageobjects/pageElements/campaignElements.ts";

Then(/^the page introduction should be visible$/, async () => {
  await CampaignPage.validateCampaignPageHeader();
});

Then(
  /^the localSubMenu should be present, and the first link should be active$/,
  async () => {
    await CampaignPage.isFirstLinkActive();
  }
);

Then(/^all links in the localSubMenu should be visible$/, async () => {
  await CampaignPage.validateLocalSubMenu();
});

// SliderWithIcons starts here

Then(
  /^the introduction of the first slider should be visible and active$/,
  async () => {
    await CampaignPage.scrollToSection(
      campaignSelectors.campaignElements["TextStatement-1"]
    );
    await CampaignPage.isfirstSlideWithIconsTitleDisplayed();
    await CampaignPage.isfirstSliderWithIconsActive();
  }
);

Then(
  /^the next slide should be enabled and previous slide should be disabled$/,
  async () => {
    await CampaignPage.isNextSlideEnabledAndClickable();
    await CampaignPage.isPreviousSlideDisabled();
  }
);

Then(/^the second and third slider should be inactive$/, async () => {
  await CampaignPage.isSecondAndThirdSliderWithIconsInactive();
});

Then(/^the previous slide should be disabled$/, async () => {
  await CampaignPage.isPreviousSlideDisabled();
});

When(/^clicking on the next slide$/, async () => {
  await CampaignPage.clickOnNextSlide();
});

Then(
  /^the introduction of the second slider should be visible and active$/,
  async () => {
    await CampaignPage.isSecondSlideWithIconsTitleDisplayed();
    await CampaignPage.isSecondSliderWithIconsActive();
  }
);

Then(/^the previous slide should be enabled and clickable$/, async () => {
  await CampaignPage.isPreviousSlideEnabledAndClickable();
});

Then(
  /^the introduction of the third slider should be visible and active$/,
  async () => {
    await CampaignPage.isThirdSlideWithIconsTitleDisplayed();
    await CampaignPage.isThirdSliderWithIconsActive();
  }
);

Then(/^the next slide should be disabled$/, async () => {
  await CampaignPage.isNextSlideDisabled();
});

When(/^clicking on the previous slide$/, async () => {
  await CampaignPage.clickOnPreviousSlide();
});
Then(/^verify heading description and image$/, async () => {
  await CampaignPage.isCarouselElementsAreVisible(
    sliderWithIconsSelectors.card1
  );
});
Then(/^verify heading description and image for second slider$/, async () => {
  await CampaignPage.isCarouselElementsAreVisible(
    sliderWithIconsSelectors.card2
  );
});

Then(
  /^the next slide and previous slide should be enabled and clickable$/,
  async () => {
    await CampaignPage.isNextSlideEnabledAndClickable();
    await CampaignPage.isPreviousSlideEnabledAndClickable();
  }
);

Then(/^verify heading description and image for third slider$/, async () => {
  await CampaignPage.isCarouselElementsAreVisible(
    sliderWithIconsSelectors.card3
  );
});

// SliderWithIcons ends here

// MediaHighlights starts here

Then(/^the MediaHighlights header should be visible$/, async () => {
  await CampaignPage.scrollToSection(mediaHighlightsSelectors.cards);
  await CampaignPage.isMediaHighlightsHeaderDisplayed();
});

Then(
  /^verify the MediaHighlights with title, description and image$/,
  async () => {
    await CampaignPage.validateMediaHighlightsCards();
  }
);

// MediaHighlights ends here

// ProductListCarousel step starts here

Then(/^the ProductListCarousel header should be visible$/, async () => {
  await CampaignPage.scrollToSection(productCarouselSelectors.cards);
  await CampaignPage.isProductCarouselHeaderDisplayed();
});

Then(/^the ProductListCarousel should contain cards$/, async () => {
  await CampaignPage.isProductCarouselCardsPresent();
});

Then(/^the fisrt 4 ProductListCarousel card should be visible$/, async () => {
  await CampaignPage.isFourProductCarouselCardsVisible();
});

Then(
  /^verify the cars details with title, description, image and links$/,
  async () => {
    await CampaignPage.validateProductCarouselElements();
  }
);

Then(
  /^the ProductListCarousel next button should be enabled and previous button disabled$/,
  async () => {
    await CampaignPage.validateProductCarouselNavigationButton();
  }
);

When(/^click the next button$/, async () => {
  await CampaignPage.clickOnSpringCarouselNextButton();
});

Then(
  /^the next card details should be visible with title, description, image and links$/,
  async () => {
    await CampaignPage.isFourProductCarouselCardsVisible();
  }
);

Then(/^click on next button until you reach at the end$/, async () => {
  await CampaignPage.validateProductCarouselNextButton();
});

Then(/^click on previous button until you reach at the start$/, async () => {
  await CampaignPage.validateProductCarouselPreviousButton();
});

// ProductListCarousel step ends here
