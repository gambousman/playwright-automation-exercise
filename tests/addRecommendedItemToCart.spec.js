import { test } from '@playwright/test';
import { RecommendedItemPage} from '../pageObjects/RecommendedItemPage.js'


test('Add Recommended Item To Cart', async ({ page }) => {
    const recommendedPage = new RecommendedItemPage(page)
    await recommendedPage.navigateToHomePage()
    await recommendedPage.validateRecommendedItemIsVisible()
    await recommendedPage.addRecommendedProductToCart()
    await recommendedPage.validateProductInCart()
})
