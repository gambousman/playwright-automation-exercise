import { test, expect } from '@playwright/test';

    test.only('Logout User', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.locator('a[href="/contact_us"]').click()
        await expect(page.locator('div[class=\'contact-form\'] h2[class=\'title text-center\']')).toHaveText('Get In Touch')
        await page.locator('[data-qa="name"]').fill('Naima')
        await page.locator('[data-qa="email"]').fill('naima@yopmail.com')
        await page.locator('[data-qa="subject"]').fill('Test subject')
        await page.locator('[data-qa="message"]').fill('Test message')
        // await waitForSelector('[name="upload_file"]')
        await page.locator('[name="upload_file"]').click()
        const filePath = 'tests/uploadFiles/testFile.pdf'
        const fileInput = page.locator('[name="upload_file"]')
        await fileInput.setInputFiles(filePath)
        await page.locator('[data-qa="submit-button"]').click()
        // await expect(page.locator('div[class=\'status alert alert-success\']')).toHaveText('Success! Your details have been submitted successfully.')
        // await waitForTimeout(5000)
        await page.getByRole('link', { name: ' Home' }).click()
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()

        await page.pause()

    })