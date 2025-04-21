import { test } from '@playwright/test';
const { faker } = require('@faker-js/faker');
import {SubscriptionPage} from '../pageObjects/SubscriptionPage.js'

test.describe('Verify Subscription', () => {


    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
    })

    test('Verify Subscription in Home page', async ({page}) => {
        const subscriptionPage = new SubscriptionPage(page)
        await subscriptionPage.navigateToHomePage()
        await subscriptionPage.NavgateToSubscriptionInHomePage()
        await subscriptionPage.FillSubscriptionEmail(faker.internet.email())
        await subscriptionPage.ValidateSucessfulSubscription()     

    })

    test('Verify Subscription in Cart page', async ({page}) => {
        const subscriptionPage = new SubscriptionPage(page)
        await subscriptionPage.navigateToHomePage()
        await subscriptionPage.NavigateToSubscriptionInCartPage()
        await subscriptionPage.FillSubscriptionEmail(faker.internet.email())
        await subscriptionPage.ValidateSucessfulSubscription()
        

    })
})