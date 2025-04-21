import { expect } from '@playwright/test';
exports.TestCasePage =
    class TestCasePage {
        constructor(page) {
            this.page = page;
            this.verifyHomePage = page.getByRole('link', { name: 'Signup / Login' });
            this.testCaseLink = page.getByRole('link', { name: 'Test Cases', exact: true });
            this.testCasePageHeading = page.locator('h2[class=\'title text-center\']');
        }

        async navigateToHomePage() {
            await this.page.goto('https://automationexercise.com/')
        }
        async NavigateToTestCasePage() {
            await expect(this.verifyHomePage).toBeVisible();
            await this.testCaseLink.click()
            await expect(this.testCasePageHeading).toHaveText('Test Cases')
        }
    }