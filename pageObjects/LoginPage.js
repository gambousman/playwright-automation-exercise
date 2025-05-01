import { expect } from '@playwright/test';
exports.LoginPage =
class LoginPage {
  constructor(page) {
    this.page = page;
    this.verifyHomePage = page.getByRole('link', { name: 'Signup / Login' });
    this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.validateSuccessfulLogin = page.locator('ul li:nth-child(10)');
    this.validateErrorLogin = page.locator('.login-form p');
  }

  async navigateToHomePage() {
    await this.page.goto('https://automationexercise.com/');
    
  }

  async login(email, password) {
    await expect(this.verifyHomePage).toBeVisible();
    await this.loginLink.click();
    await expect(this.loginHeading).toBeVisible();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    // await expect(this.validateSuccessfulLogin).toContainText('Logged in as Ameesh');
  }

  async successLogin() {
    await expect(this.validateSuccessfulLogin).toContainText('Logged in as Ameesh');
  }

  async errorLogin() {
    await expect(this.validateErrorLogin).toContainText('Your email or password is incorrect!')
    ;
  }

}