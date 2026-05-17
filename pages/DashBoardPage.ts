import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashBoardPage extends BasePage {

  readonly dashboardTitle: Locator;
  readonly userDropdown: Locator;

  constructor(page: Page) {
    super(page);

    this.dashboardTitle = page.locator('h6');
    this.userDropdown = page.locator('.oxd-userdropdown-name');
  }

  async verifyDashboardLoaded() {
    await expect(this.dashboardTitle).toContainText('Dashboard');
  }

  async verifyUserConnected() {
    await expect(this.userDropdown).toBeVisible();
  }
}