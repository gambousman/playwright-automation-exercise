import { expect } from '@playwright/test';
exports.ProductPage =
    class ProductPage {
        constructor(page) {
            this.page = page;
            this.verifyHomePage = page.getByRole('link', { name: 'Signup / Login' });
            this.productLink = page.locator('a[href="/products"]')
            this.productHeading = page.locator('h2[class=\'title text-center\']')
            this.productList = page.locator('.features_items')
            this.viewProductButton = page.locator('.product-image-wrapper a[title="View Product"]')
            this.productName = page.locator('.product-information h2')
            this.continueShoppingButton = page.locator('.btn.btn-success.close-modal.btn-block')
            this.viewSelectedProductButton = page.locator('p a[href="/view_cart"] ')
            this.validateProduct1 = page.locator('#product-1 a')
            this.validateProduct2 = page.locator('#product-2 a')
            this.searchProductInput = page.getByPlaceholder('Search Product')
            this.searchButton = page.locator('#submit_search')
            this.searchProductHeading = page.locator('.title.text-center')




        }
        async navigateToHomePage() {
            await this.page.goto('https://automationexercise.com/')
        }
        async validateHomePage() {
            await expect(this.verifyHomePage).toBeVisible()

        }
        async navigatetoProductPage() {
            await this.productLink.click()
            await expect(this.productHeading).toHaveText('All Products')
        }
        async searchProduct() {
            await this.searchProductInput.fill('Tshirt')
            await this.searchButton.click()
            await expect(this.searchProductHeading).toContainText('Searched Products')

        }
        async getSearchedProductNames() {
            return await this.page.$$eval('.single-products p', elements =>
                elements.map(el => el.textContent.trim())
            )

        }

        async addProductToCart() {
            const product = 'Blue Top'
            const ProductLists = this.productList
            const productCount = await ProductLists.count()
            console.log(productCount)
            for (let i = 0; i < productCount; i++) {
                const productName = ProductLists.nth(i).getByText('Blue Top').first()
                console.log(productName)
                if (productName === product) {
                    await ProductLists.nth(i).locator('.single-products .add-to-cart').first().click()
                    // await this.page.locator('.choose > .nav > li > a').first().click()

                    break
                }
            }
        }
        async viewProduct() {
            await expect(this.productList).toBeVisible()
            const productCount = await this.productList.count()
            console.log(productCount)
            for (let i = 0; i < productCount; i++) {
                await this.productList.nth(i).locator('.choose > .nav > li > a').first().click()

            }
        }
        async validateViewedProductName() {
            await expect(this.productName).toContainText('Blue Top')

        }
        async validateProductInCart() {
            await this.viewSelectedProductButton.click()
            await expect(this.validateProduct1).toHaveText('Blue Top')
            // await expect(this.validateProduct2).toHaveText('Men Tshirt')
        }
    }