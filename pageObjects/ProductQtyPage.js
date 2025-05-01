import { expect } from '@playwright/test';
exports.ProductQtyPage =
    class ProductQtyPage {
        constructor(page) {
            this.page = page;
            this.productQtyInput = page.locator('#quantity')
            this.addToCartButton = page.locator('[type="button"]')
            this.viewCartButton = page.locator('p a[href="/view_cart"]')
            this.productQty = page.locator('.cart_quantity')

}
 async addProductQty() {
    await this.productQtyInput.fill('2')
    await this.addToCartButton.click()
    await this.viewCartButton.click()
    
}
    
 async validateProductQty() {
    await expect(this.productQty).toHaveText('2')
}
}
