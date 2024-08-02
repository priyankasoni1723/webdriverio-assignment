import { $ } from "@wdio/globals";
import Page from "../page.ts";
import {
  campaignSelectors,
  localSubmenuSelectors,
  mediaHighlightsSelectors,
  pageComponents,
  productCarouselSelectors,
  sliderWithIconsSelectors,
} from "../pageElements/campaignElements.ts";

class CampaignPage extends Page {
  public async acceptCookies() {
    const btnAcceptCookies = await $(pageComponents.cookiesAcceptButton);
    await btnAcceptCookies.click();
  }
  public get getHeader() {
    return $(pageComponents.header);
  }
  public get getFooter() {
    return $(pageComponents.footer);
  }
  async getElementByDataAutoid(id: any) {
    return $(campaignSelectors.campaignElements[id]);
  }
  async isFirstLinkActive() {
    const element = await $(localSubmenuSelectors.firstLocalSubmenuLink);
    const attr = await element.getAttribute("data-active");
    return attr === "true";
  }
  public openBrowser() {
    return super.open("highlights");
  }
  public closeBroswer() {
    return super.close();
  }
  public async isfirstSlideWithIconsTitleDisplayed() {
    return await (await $(sliderWithIconsSelectors.title1)).isDisplayed();
  }
  public async isSecondSlideWithIconsTitleDisplayed() {
    return await (await $(sliderWithIconsSelectors.title2)).isDisplayed();
  }
  public async isThirdSlideWithIconsTitleDisplayed() {
    return await (await $(sliderWithIconsSelectors.title3)).isDisplayed();
  }
  public async isfirstSliderWithIconsActive() {
    const attr = await (
      await $(sliderWithIconsSelectors.title1)
    ).getAttribute("aria-selected");
    return attr === "true";
  }
  public async isSecondSliderWithIconsActive() {
    const attr = await $(sliderWithIconsSelectors.title2).getAttribute(
      "aria-selected"
    );
    return attr === "true";
  }
  public async isThirdSliderWithIconsActive() {
    const attr = await $(sliderWithIconsSelectors.title3).getAttribute(
      "aria-selected"
    );
    return attr === "true";
  }

  public async isSecondAndThirdSliderWithIconsInactive() {
    const attr2 = await (
      await $(sliderWithIconsSelectors.title2)
    ).getAttribute("aria-selected");
    const attr3 = await (
      await $(sliderWithIconsSelectors.title3)
    ).getAttribute("aria-selected");
    return attr2 === "false" && attr3 === "false";
  }
  public async isFirstAndThirdSliderWithIconsInactive() {
    const attr2 = await (
      await $(sliderWithIconsSelectors.title1)
    ).getAttribute("aria-selected");
    const attr3 = await (
      await $(sliderWithIconsSelectors.title3)
    ).getAttribute("aria-selected");
    return attr2 === "false" && attr3 === "false";
  }
  public async isFirstAndSecondSliderWithIconsInactive() {
    const attr2 = await (
      await $(sliderWithIconsSelectors.title1)
    ).getAttribute("aria-selected");
    const attr3 = await (
      await $(sliderWithIconsSelectors.title2)
    ).getAttribute("aria-selected");
    return attr2 === "false" && attr3 === "false";
  }

  public async isNextSlideEnabledAndClickable() {
    const isEnabled = await (
      await $(sliderWithIconsSelectors.springCarouselNextButton)
    ).isEnabled();
    const isClickable = await (
      await $(sliderWithIconsSelectors.springCarouselNextButton)
    ).isClickable();
    return isEnabled && isClickable;
  }
  public async isPreviousSlideEnabledAndClickable() {
    const isEnabled = await (
      await $(sliderWithIconsSelectors.springCarouselPreviousButton)
    ).isEnabled();
    const isClickable = await (
      await $(sliderWithIconsSelectors.springCarouselPreviousButton)
    ).isClickable();
    return isEnabled && isClickable;
  }
  public async clickOnNextSlide() {
    const nextButton = await $(
      sliderWithIconsSelectors.springCarouselNextButton
    );
    nextButton.click();
  }
  public async clickOnPreviousSlide() {
    await (
      await $(sliderWithIconsSelectors.springCarouselPreviousButton)
    ).click();
  }
  public async isPreviousSlideDisabled() {
    const attr = await (
      await $(sliderWithIconsSelectors.springCarouselPreviousButton)
    ).getAttribute("aria-selected");
    return attr === "false";
  }
  public async isNextSlideDisabled() {
    const attr = await (
      await $(sliderWithIconsSelectors.springCarouselNextButton)
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
      await expect(element).toBeDisplayed();
    }
  }

  //Carousel actions

  async isProductCarouselHeaderDisplayed() {
    const element = await $(productCarouselSelectors.header);
    await expect(element).toBeDisplayed();
  }

  async isProductCarouselCardsPresent() {
    const cards = await $$(productCarouselSelectors.cards);
    await expect(cards.length).toBeGreaterThan(0);
  }
  async isFourProductCarouselCardsVisible() {
    const cards = await $$(productCarouselSelectors.cards);
    await expect(cards.length).toBeGreaterThan(0);
    for (let i = 0; i < Math.min(4, cards.length); i++) {
      await expect(cards[i]).toBeDisplayed();
    }
  }

  async isProductCarouselElementsAreVisible(cardId: number, parentId: string) {
    const selectors = [
      productCarouselSelectors.category(cardId, parentId),
      productCarouselSelectors.modelName(cardId, parentId),
      productCarouselSelectors.rechargeType(cardId, parentId),
      productCarouselSelectors.image(cardId, parentId),
      productCarouselSelectors.link(cardId, parentId),
    ];

    for (const selector of selectors) {
      const element = await $(selector);
      await expect(element).toBeDisplayed();
    }
  }

  async validateProductCarouselElements() {
    const cardElements = await $$(productCarouselSelectors.cards);

    for (let cardId = 1; cardId <= cardElements.length; cardId++) {
      await this.isProductCarouselElementsAreVisible(
        cardId,
        productCarouselSelectors.cards
      );
    }
  }
  async validateProductCarouselNavigationButton() {
    expect(
      await (
        await $(productCarouselSelectors.springCarouselPreviousButton)
      ).getAttribute("aria-disabled")
    ).toBe("true");
    expect(
      await (
        await $(productCarouselSelectors.springCarouselNextButton)
      ).getAttribute("aria-disabled")
    ).toBe("false");
  }
  async validateProductCarouselPreviousButton() {
    const nextButton = await $(
      productCarouselSelectors.springCarouselNextButton
    );
    const prevButton = await $(
      productCarouselSelectors.springCarouselPreviousButton
    );

    // Keep clicking the next button until it's disabled
    while ((await prevButton.getAttribute("aria-disabled")) !== "true") {
      await prevButton.click();
    }
    await expect(await prevButton.getAttribute("aria-disabled")).toBe("true");
    await expect(await nextButton.getAttribute("aria-disabled")).toBe("false");
  }
  async validateProductCarouselNextButton() {
    const nextButton = await $(
      productCarouselSelectors.springCarouselNextButton
    );
    const prevButton = await $(
      productCarouselSelectors.springCarouselPreviousButton
    );

    // Keep clicking the next button until it's disabled
    while ((await nextButton.getAttribute("aria-disabled")) !== "true") {
      await nextButton.click();
    }
    await expect(await nextButton.getAttribute("aria-disabled")).toBe("true");
    await expect(await prevButton.getAttribute("aria-disabled")).toBe("false");
  }

  async isMediaHighlightsElementsAreVisible(cardId: string, parentId: string) {
    const selectors = [
      mediaHighlightsSelectors.heading(cardId, parentId),
      mediaHighlightsSelectors.description(cardId, parentId),
      mediaHighlightsSelectors.image(cardId, parentId),
    ];

    for (const selector of selectors) {
      const element = await $(selector);
      await expect(element).toBeDisplayed();
    }
  }

  async isMediaHighlightsHeaderDisplayed() {
    const element = await $(mediaHighlightsSelectors.header);
    await expect(element).toBeDisplayed();
  }
  async validateMediaHighlightsCards() {
    await this.isMediaHighlightsElementsAreVisible(
      mediaHighlightsSelectors.cards,
      mediaHighlightsSelectors.card1
    );
    await this.isMediaHighlightsElementsAreVisible(
      mediaHighlightsSelectors.cards,
      mediaHighlightsSelectors.card2
    );
  }
  async validateCampaignElements() {
    const components = Object.keys(campaignSelectors.campaignElements);

    for (const component of components) {
      await expect(await this.getElementByDataAutoid(component)).toBeExisting();
    }
  }
  async validateCampaignPageHeader() {
    const modelIntroElement = await $(
      campaignSelectors.campaignElements["ModelIntro-1"]
    );
    await expect(modelIntroElement).toBeExisting();

    const safetyHeading = await modelIntroElement.$(
      "//h1[contains(.,'Safety')]"
    );
    await expect(safetyHeading).toBeExisting();
  }
  async validateLocalSubMenu() {
    const links = await $$(localSubmenuSelectors.localSubmenuLinks);
    for (const link of links) {
      await expect(link).toBeDisplayed();
    }
  }

  async clickOnSpringCarouselNextButton() {
    const nextButton = await $(
      productCarouselSelectors.springCarouselNextButton
    );
    await nextButton.click();
  }

  async scrollToSection(id: string) {
    const section = await $(id);
    await section.scrollIntoView();
  }
}

export default new CampaignPage();
