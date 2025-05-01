import { test } from '@playwright/test';
import { ProductPage } from '../pageObjects/ProductPage.js'
import { ProductReviewPage } from "../pageObjects/ProductReviewPage.js"
const { faker } = require('@faker-js/faker');

test('Add Review on Product', async ({ page }) => {
    const productPage = new ProductPage(page)
    const productReviewPage = new ProductReviewPage(page)
    await productPage.navigateToHomePage()
    await productPage.validateHomePage()
    await productPage.navigatetoProductPage()
    await productPage.viewProduct()
    await productReviewPage.validateReviewPage()
    await productReviewPage.fillReviewForm('John Doe', faker.internet.email(), 'This is a test review.')
    await productReviewPage.submitReview()
    await productReviewPage.validateSuccessMessage()

})