import { expect } from '@playwright/test';
exports.LogoutPage =
class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.validateSuccessfulLogout = page.locator('.login-form h2');

    
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.validateSuccessfulLogout).toContainText('Login to your account')
  }
}
