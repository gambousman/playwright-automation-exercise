import { test } from '@playwright/test';
import { ProductPage } from '../pageObjects/ProductPage.js'

    test('Search Product', async ({page}) => {
        const productPage = new ProductPage(page)
        await productPage.navigateToHomePage()
        await productPage.validateHomePage()
        await productPage.navigatetoProductPage()
        await productPage.searchProduct()
        const productNames = await productPage.getSearchedProductNames()
        console.log('Visible Product Names:');
        productNames.forEach(name => console.log(name));


    })
    