import { $ } from "@wdio/globals";
import Page from "../page.ts";
import {
  campaignSelectors,
  sliderWithIconsSelectors,
} from "../pageElements/campaignElements.ts";

class CampaignPage extends Page {
  public get btnAcceptCookies() {
    return $("#onetrust-accept-btn-handler");
  }
  public async acceptCookies() {
    await this.btnAcceptCookies.click();
  }
  public get getHeader() {
    return $(campaignSelectors.pageComponents.header);
  }
  public get getFooter() {
    return $(campaignSelectors.pageComponents.footer);
  }
  getElementByDataAutoid(id: any) {
    return $(campaignSelectors.campaignElements[id]);
  }
  async isFirstLinkActive() {
    const element = await $(campaignSelectors.FirstLocalSubmenuLink);
    const attr = await element.getAttribute("data-active");
    return attr === "true";
  }
  public open() {
    return super.open("highlights");
  }
  public isfirstSlideWithIconsTitleDisplayed() {
    return $(sliderWithIconsSelectors.title1).isDisplayed();
  }
  public isSecondSlideWithIconsTitleDisplayed() {
    return $(sliderWithIconsSelectors.title2).isDisplayed();
  }
  public isThirdSlideWithIconsTitleDisplayed() {
    return $(sliderWithIconsSelectors.title3).isDisplayed();
  }
  async isfirstSliderWithIconsActive() {
    const attr = await $(sliderWithIconsSelectors.title1).getAttribute(
      "aria-selected"
    );
    return attr === "true";
  }
  async isSecondSliderWithIconsActive() {
    const attr = await $(sliderWithIconsSelectors.title2).getAttribute(
      "aria-selected"
    );
    return attr === "true";
  }
  async isThirdSliderWithIconsActive() {
    const attr = await $(sliderWithIconsSelectors.title3).getAttribute(
      "aria-selected"
    );
    return attr === "true";
  }

  async isSecondAndThirdSliderWithIconsInactive() {
    const attr2 = await $(sliderWithIconsSelectors.title2).getAttribute(
      "aria-selected"
    );
    const attr3 = await $(sliderWithIconsSelectors.title3).getAttribute(
      "aria-selected"
    );
    return attr2 === "false" && attr3 === "false";
  }
  async isFirstAndThirdSliderWithIconsInactive() {
    const attr2 = await $(sliderWithIconsSelectors.title1).getAttribute(
      "aria-selected"
    );
    const attr3 = await $(sliderWithIconsSelectors.title3).getAttribute(
      "aria-selected"
    );
    return attr2 === "false" && attr3 === "false";
  }
  async isFirstAndSecondSliderWithIconsInactive() {
    const attr2 = await $(sliderWithIconsSelectors.title1).getAttribute(
      "aria-selected"
    );
    const attr3 = await $(sliderWithIconsSelectors.title2).getAttribute(
      "aria-selected"
    );
    return attr2 === "false" && attr3 === "false";
  }

  async isNextSlideEnabledAndClickable() {
    const isEnabled = await $(
      sliderWithIconsSelectors.springCarouselNextButton
    ).isEnabled();
    const isClickable = await $(
      sliderWithIconsSelectors.springCarouselNextButton
    ).isClickable();
    return isEnabled && isClickable;
  }
  async isPreviousSlideEnabledAndClickable() {
    const isEnabled = await $(
      sliderWithIconsSelectors.springCarouselPreviousButton
    ).isEnabled();
    const isClickable = await $(
      sliderWithIconsSelectors.springCarouselPreviousButton
    ).isClickable();
    return isEnabled && isClickable;
  }
  public async clickOnNextSlide() {
    await $(sliderWithIconsSelectors.springCarouselNextButton).click();
  }
  public async clickOnPreviousSlide() {
    await $(sliderWithIconsSelectors.springCarouselPreviousButton).click();
  }
  async isPreviousSlideDisabled() {
    const attr = await $(
      sliderWithIconsSelectors.springCarouselPreviousButton
    ).getAttribute("aria-selected");
    return attr === "false";
  }
  async isNextSlideDisabled() {
    const attr = await $(
      sliderWithIconsSelectors.springCarouselNextButton
    ).getAttribute("aria-selected");
    return attr === "false";
  }

  async isCarouselElementsAreVisible(parentId: string) {
    const selectors = [
      sliderWithIconsSelectors.heading(parentId),
      sliderWithIconsSelectors.description(parentId),
      sliderWithIconsSelectors.image(parentId),
    ];

    for (const selector of selectors) {
      const element = await $(selector);
      if (!(await element.isDisplayed())) {
        return false;
      }
    }
    return true;
  }
}

export default new CampaignPage();
