import { expect } from '@playwright/test';
exports.ProductReviewPage =
    class ProductReviewPage {
        constructor(page) {
            this.page = page;
            this.verifyReviewPage = page.locator('a[href=\'#reviews\']')
            this.nameInput = page.locator('#name')
            this.emailInput = page.locator('#email')
            this.reviewInput = page.locator('#review')
            this.submitButton = page.locator('#button-review')
            this.successMessage = page.locator('#review-section div').nth(1)
        }
        async validateReviewPage() {
            await expect(this.verifyReviewPage).toBeVisible()
            await expect(this.verifyReviewPage).toHaveText('Write Your Review')
        }
        async fillReviewForm(name, email, review) {
            await this.nameInput.fill(name)
            await this.emailInput.fill(email)
            await this.reviewInput.fill(review)
        }
        async submitReview() {
            await this.submitButton.click()
        }
        async validateSuccessMessage() {
            await expect(this.successMessage).toBeVisible()
            await expect(this.successMessage).toHaveText('Thank you for your review.')
        }
    }