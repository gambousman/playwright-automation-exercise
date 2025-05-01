import {LoginPage} from "../pageObjects/LoginPage.js"
import {ProductPage} from "../pageObjects/ProductPage.js"
import {test} from "@playwright/test"

test('Search Product and verify product in cart after login ', async ({page}) => {
    const login = new LoginPage(page)
    const product = new ProductPage(page)
    await product.navigateToHomePage()
    await product.validateHomePage()
    await product.navigatetoProductPage()
    await product.searchProduct()
    await product.getSearchedProductNames()
    await product.addProductToCart()
    await product.validateProductInCart()
    await login.login('naima@yopmail.com', '123456')
    await login.successLogin()
    await product.clickCartButton()   
})