import {BrandPage} from "../pageObjects/BrandPage.js"
import {test} from "@playwright/test"

test('Brand Module', async ({page}) => {
    const brand = new BrandPage(page)
    await brand.navigateToHomePage()
    await brand.validateBrandIsVisible()
    await brand.selectBrand()
    await brand.verifyBrandTitle()
    
})