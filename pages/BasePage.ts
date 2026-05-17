import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async waitForSeconds(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async verifyUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
}