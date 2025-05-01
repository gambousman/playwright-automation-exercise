import { expect } from '@playwright/test';
exports.SubscriptionPage =
    class SubscriptionPage {
        constructor(page) {
            this.page = page;
            this.verifyHomePage = page.getByRole('link', { name: 'Signup / Login' });
            this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription' });
            this.subscriptionEmailInput = page.locator('#susbscribe_email');
            this.subscriptionButton = page.locator('#subscribe');
            this.subscriptionSuccessMessage = page.locator('.alert-success');
            this.cartLink = page.getByRole('link', { name: 'Cart' });
            this.subscriptionHeadingInCart = page.locator('.single-widget h2');

        }
        async navigateToHomePage() {
            await this.page.goto('https://automationexercise.com/')
        }
        async NavgateToSubscriptionInHomePage() {
            await expect(this.verifyHomePage).toBeVisible();
            await expect(this.subscriptionHeading).toHaveText('Subscription')
            
        }

        async NavigateToSubscriptionInCartPage() {
            await expect(this.verifyHomePage).toBeVisible();
            await this.cartLink.click()
            await expect(this.subscriptionHeadingInCart).toHaveText('Subscription')
           
        }
        async FillSubscriptionEmail(email) {
            await this.subscriptionEmailInput.fill(email)
            await this.subscriptionButton.click()
            
        }

        async ValidateSucessfulSubscription() {
            const successMessage = this.subscriptionSuccessMessage;
            await expect(successMessage).toContainText('You have been successfully subscribed!')
        }
    }