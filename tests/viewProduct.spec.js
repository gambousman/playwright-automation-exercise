import { test } from '@playwright/test';
import { ProductPage } from '../pageObjects/ProductPage.js'

    test('View Product', async ({page}) => {
        const productPage = new ProductPage(page)
        await productPage.navigateToHomePage()
        await productPage.validateHomePage()
        await productPage.navigatetoProductPage()
        await productPage.viewProduct()
        await productPage.validateViewedProductName()
        
    })