import { expect } from '@playwright/test';
exports.BrandPage =
    class BrandPage {
        constructor(page) {
            this.page = page;
            this.verifyBrandIsVisible = page.locator('.left-sidebar .brands_products');
            this.brandList = page.locator('.brands_products')
            this.brandName = page.locator('.brands_products [href="/brand_products/Madame"]')
            this.confirmBrandTitle = page.locator('.features_items  .title')
            this.brandName1 = page.locator('.brands_products [href="/brand_products/Babyhug"]')

        }
        async navigateToHomePage() {
            await this.page.goto('https://automationexercise.com/');

        }
        async validateBrandIsVisible() {
            await expect(this.verifyBrandIsVisible).toContainText('Brands')
        }
        async selectBrand() {
            await this.brandName.click()
        }

        async verifyBrandTitle() {
            await expect(this.confirmBrandTitle).toContainText('Brand - Madame Products')
        }
    }