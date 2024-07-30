import { $ } from "@wdio/globals";
import Page from "../page.ts";
import { campaginSelectors } from "../pageElements/campaginElements.ts";

class CampaignPage extends Page {
  public get btnAcceptCookies() {
    return $("#onetrust-accept-btn-handler");
  }
  public async acceptCookies() {
    await this.btnAcceptCookies.click();
  }
  public get getHeader() {
    return $(campaginSelectors.pageComponents.header);
  }
  public get getFooter() {
    return $(campaginSelectors.pageComponents.footer);
  }
  getElementByDataAutoid(id: string) {
    return $(campaginSelectors.campaginComponents[id]);
  }
  public open() {
    return super.open("highlights");
  }
}

export default new CampaignPage();
