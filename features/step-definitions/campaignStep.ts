import { Given, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import CampaignPage from "../pageobjects/pageActions/campaign.page.ts";
import { campaignSelectors } from "../pageobjects/pageElements/campaignElements.ts";

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
