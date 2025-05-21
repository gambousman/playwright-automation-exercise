import { test } from '@playwright/test';
import {ContactUsPage} from '../pageObjects/ContactUsPage.js'

    test('Contact Us Module', async ({page}) => {
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