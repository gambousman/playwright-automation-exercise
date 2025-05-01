import { expect } from '@playwright/test';
exports.RecommendedItemPage=
class RecommendedItemPage {
    constructor(page) {
        this.page = page;
        this.verifyRecommendedItemIsVisible = page.locator('div[class=\'recommended_items\'] h2[class=\'title text-center\']')
        this.recommendedItemList = page.locator('.recommended_items')
        this.viewSelectedProductButton = page.locator('a').filter({ hasText: 'View Cart' })
        this.validateProduct = page.locator('.cart_description a[href="/product_details/1"]')
    }
    async navigateToHomePage() {
        await this.page.goto('https://automationexercise.com/')
    }
    async validateRecommendedItemIsVisible() {
        await expect(this.verifyRecommendedItemIsVisible).toContainText('recommended items')
    }
    async addRecommendedProductToCart() {
        const product = 'Blue Top'
        const ProductLists = this.recommendedItemList
        const productCount = await ProductLists.count()
        console.log(productCount)
        for (let i = 0; i < productCount; i++) {
            const productName = await ProductLists.nth(i).locator('.productinfo p').getByText('Blue Top').first().textContent()
            console.log(productName)
            if (productName === product) {
                await ProductLists.nth(i).locator('.productinfo > .btn').first().click()
                break
            }


        }
    }
    // async validateProductInCart(product = 'Winter Top') {
    //     await this.viewSelectedProductButton.click();
    //     const productLink = this.page.getByRole('link', { name: product });
    //     await expect(productLink).toHaveText(product);
    // }
    async validateProductInCart() {
        await this.viewSelectedProductButton.click()
        await expect(this.validateProduct).toHaveText('Blue Top')
    }

}