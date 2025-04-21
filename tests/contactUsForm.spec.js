import { test } from '@playwright/test';
import {ContactUsPage} from '../pageObjects/ContactUsPage.js'

    test('Logout User', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        const contactUs = new ContactUsPage(page)
        await contactUs.navigateToHomePage()
        await contactUs.validateHomePage()
        await contactUs.navigatetoContactUsPage()
        await contactUs.fillContactUsForm('Naima', 'naima@yopmail.com', 'Test subject', 'Test message')
        await contactUs.handleDialogs()
        await contactUs.submitForm()
        // await contactUs.validateSuccessMessage()
        await contactUs.clickHomeLink()
        await contactUs.validateHomePage()
        




    })