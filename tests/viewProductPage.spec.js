import { test, expect } from '@playwright/test';

    test('Search Product', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.locator('a[href="/products"]').click()
        await expect(page.locator('h2[class=\'title text-center\']')).toHaveText('All Products')
        await expect(page.locator('.features_items')).toBeVisible()

        const product = 'Blue Top'
        const ProductLists = page.locator('.features_items')
        const productCount = await ProductLists.count()
        console.log(productCount)
        for (let i = 0; i < productCount; i++) {
            const productName = ProductLists.nth(i).getByText('Blue Top').first()
            console.log(productName)
            if (productName === product) {
                await ProductLists.nth(i).getByText('View Product').click()

                break
            }    
        }
        // await expect(page.locator('.product-information')).toBeVisible()
        await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible()
        await page.pause()

    })