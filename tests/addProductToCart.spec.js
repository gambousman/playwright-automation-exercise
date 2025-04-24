import { test} from '@playwright/test';
import { ProductPage } from '../pageObjects/ProductPage.js'

test('Add Product to Cart', async ({page}) => {
    const productPage = new ProductPage(page)
    await productPage.navigateToHomePage()
    await productPage.validateHomePage()
    await productPage.navigatetoProductPage()
    await productPage.addProductToCart()
    await productPage.validateProductInCart()
    page.pause()

   })