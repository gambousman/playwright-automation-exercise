import { test } from '@playwright/test';
const { faker } = require('@faker-js/faker');
import {SubscriptionPage} from '../pageObjects/SubscriptionPage.js'

let subscriptionPage
test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    subscriptionPage = new SubscriptionPage(page)
    await subscriptionPage.navigateToHomePage();
});

test.describe('Verify Subscription', () => {   
    test('Verify Subscription in Home page', async ({page}) => {
       
        await subscriptionPage.NavgateToSubscriptionInHomePage()
        await subscriptionPage.FillSubscriptionEmail(faker.internet.email())
        await subscriptionPage.ValidateSucessfulSubscription()     

    })

    test('Verify Subscription in Cart page', async ({page}) => {
        
        await subscriptionPage.NavigateToSubscriptionInCartPage()
        await subscriptionPage.FillSubscriptionEmail(faker.internet.email())
        await subscriptionPage.ValidateSucessfulSubscription()
        

    })
})