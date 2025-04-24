import {ProductPage} from "../pageObjects/ProductPage.js"
import {test} from "@playwright/test"

test('Remove Product From Cart', async ({page}) => {
    const productPage = new ProductPage(page)
    await productPage.navigateToHomePage()
    await productPage.addProductToCart()
    await productPage.validateProductInCart()
    await productPage.removeProductFromCart()
    await productPage.validateProductRemovedFromCart()
    
})