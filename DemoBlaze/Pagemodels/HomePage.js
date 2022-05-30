class HomePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.ButtonPageNext = page.locator();
  }
  async pageNext() {
    await this.ButtonPageNext.click();
  }
  async navigate() {
    await this.page.goto("https://bing.com");
  }
}
