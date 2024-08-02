import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import CampaignPage from "./pageobjects/pageActions/campaign.page.ts";

BeforeAll(async () => {
  try {
    console.log(
      "Before all scenarios: Verify the presence of header, footer, and page components on the Campaign page"
    );
    // Given I am on the campaign page
    await CampaignPage.openBrowser();
    // Then I accept the cookies
    await CampaignPage.acceptCookies();
    // Then the header is present
    await expect(CampaignPage.getHeader).toBeExisting();
    // Then the page components are present
    await CampaignPage.validateCampaignElements();
    // Then the footer is present
    await expect(CampaignPage.getFooter).toBeExisting();
  } catch (error) {
    console.error("Error in BeforeAll hook:", error);
    throw error; // Ensure the error is propagated
  }
});

AfterAll(async () => {
  try {
    console.log("After all scenarios");
  } catch (error) {
    console.error("Error in AfterAll hook:", error);
    throw error;
  }
});
