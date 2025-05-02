import { test } from '@playwright/test'
import {PlaceOrderPage} from '../pageObjects/PlaceOrderPage.js'
import { RegisterPage} from '../pageObjects/RegisterPage.js'
import {ProductPage} from '../pageObjects/ProductPage.js'
import { faker } from '@faker-js/faker';

test.describe('Place Order Module',() => {
    test('Place order: Register while checkout', async ({page}) => {
        const placeOrderPage = new PlaceOrderPage(page)
        const registerPage = new RegisterPage(page)
        const productPage = new ProductPage(page)
        await productPage.navigateToHomePage()
        await productPage.navigatetoProductPage()
        await productPage.addProductToCart()
        await productPage.validateProductInCart()
        await placeOrderPage.checkout()
        await placeOrderPage.navigateToRegisterPage()
        await registerPage.register('Nana', faker.internet.email())
        await registerPage.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')
        await placeOrderPage.clickCartButton()
        await placeOrderPage.checkout()
        await placeOrderPage.validateDeliveryAddress()
        await placeOrderPage.validateOrderSummary()
        await placeOrderPage.fillOrderDescription('This is a test order')
        await placeOrderPage.clickOrderButton()
        await placeOrderPage.validatePaymentPage()
        await placeOrderPage.fillPaymentDetails('Nana Doe', '1234567812345678', '12', '2025', '123')
        await placeOrderPage.clickPayAndConfirmOrderButton()
        await placeOrderPage.validateOrderConfirmation()
        await productPage.clickInvoiceButton()    
})
})