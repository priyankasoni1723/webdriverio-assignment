import { $ } from "@wdio/globals";
import Page from "../page.ts";
import { campaignSelectors } from "../pageElements/campaignElements.ts";

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
}

export default new CampaignPage();
