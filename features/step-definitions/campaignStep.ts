import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import CampaignPage from "../pageobjects/pageActions/campaign.page.ts";
import {
  campaignSelectors,
  sliderWithIconsSelectors,
} from "../pageobjects/pageElements/campaignElements.ts";

Given(/^I am on the (\w+) page$/, async (page) => {
  await CampaignPage.open();
});

Then(/^I accept the cookies$/, async () => {
  await CampaignPage.acceptCookies();
});

Then(/^the header is present$/, async () => {
  await expect(CampaignPage.getHeader).toBeExisting();
});

Then(/^the page components are present$/, async () => {
  const components = Object.keys(campaignSelectors.campaignElements);

  for (const component of components) {
    await expect(CampaignPage.getElementByDataAutoid(component)).toBeExisting();
  }
});

Then(/^the footer is present$/, async () => {
  await expect(CampaignPage.getHeader).toBeExisting();
});

Then(/^the page introduction should be visible$/, async () => {
  const modelIntroElement = await $(
    campaignSelectors.campaignElements["ModelIntro-1"]
  );
  await expect(modelIntroElement).toBeExisting();

  const safetyHeading = await modelIntroElement.$("//h1[contains(.,'Safety')]");
  await expect(safetyHeading).toBeExisting();
});

Then(
  /^the localSubMenu should be present, and the first link should be active$/,
  async () => {
    await CampaignPage.isFirstLinkActive();
  }
);

Then(/^all links in the localSubMenu should be visible$/, async () => {
  const links = await $$(campaignSelectors.LocalSubmenuLinks);
  for (const link of links) {
    await expect(link).toBeDisplayed();
  }
});

Then(
  /^the introduction of the first slider should be visible and active$/,
  async () => {
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
  console.log("the previous slide 1");
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
  //use
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
