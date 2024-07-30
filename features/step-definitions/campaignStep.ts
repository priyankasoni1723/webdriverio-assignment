import { Given, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import CampaignPage from "../pageobjects/pageActions/campaign.page.ts";
import { campaginSelectors } from "../pageobjects/pageElements/campaginElements.ts";

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
  const components = Object.keys(campaginSelectors.campaginComponents);

  for (const component of components) {
    await expect(CampaignPage.getElementByDataAutoid(component)).toBeExisting();
  }
});

Then(/^the footer is present$/, async () => {
  await expect(CampaignPage.getHeader).toBeExisting();
});
