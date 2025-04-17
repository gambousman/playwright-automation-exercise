import { test, expect } from '@playwright/test';

    test('Logout User', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.locator('a[href="/products"]').click()
        await expect(page.locator('h2[class=\'title text-center\']')).toHaveText('All Products')
        await page.getByPlaceholder('Search Product').fill('Tshirt')
        await page.locator('#submit_search').click()
        await expect(page.locator('.title.text-center')).toContainText('Searched Products')
        const productNames = await page.$$eval('.single-products p', elements =>
            elements.map(el => el.textContent.trim())
          );
        
          console.log('Visible Product Names:');
          productNames.forEach(name => console.log(name));
    })
    // test('Search Product Not Found', async ({browser}) => {
    //     const context = await browser.newContext()
    //     const page = await context.newPage()
    //     await page.goto('https://automationexercise.com/')
    //     await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
    //     await page.locator('a[href="/products"]').click()
    //     await expect(page.locator('h2[class=\'title text-center\']')).toHaveText('All Products')
    //     await page.getByPlaceholder('Search Product').fill('Tshirt1234')
    //     await page.locator('#submit_search').click()
    //     await expect(page.locator('.productinfo p')).not.toContainText('Tshirt1234')
    // })