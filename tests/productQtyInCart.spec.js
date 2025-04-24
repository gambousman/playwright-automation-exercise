import { test } from '@playwright/test';
import { ProductPage } from '../pageObjects/ProductPage.js'
import { ProductQtyPage } from '../pageObjects/ProductQtyPage.js'

    test('Verify Product Quantity in Cart', async ({page}) => {
        const productPage = new ProductPage(page)
        const productQtyPage = new ProductQtyPage(page)
        await productPage.navigateToHomePage()
        await productPage.validateHomePage()
        await productPage.navigatetoProductPage()
        await productPage.viewProduct()
        await productQtyPage.addProductQty()
        await productQtyPage.validateProductQty()
        
    })