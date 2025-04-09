import { test, expect } from '@playwright/test';

test('Add Product to Cart', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://automationexercise.com/')
    await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible()
    await page.locator('a[href="/products"]').click()
    await expect(page.locator('h2[class=\'title text-center\']')).toHaveText('All Products')
    await expect(page.locator('.features_items')).toBeVisible()

    const product = 'Blue Top'
    const product2 = "Men Tshirt"
    const ProductLists = page.locator('.features_items')
    const productCount = await ProductLists.count()
    console.log(productCount)
    for (let i = 0; i < productCount; i++) {
        const productName = ProductLists.nth(i).getByText('Blue Top').first()
        console.log(productName)
        if (productName === product) {
            await ProductLists.nth(i).getByText('Add to cart').click()
            await page.locator('.btn.btn-success.close-modal.btn-block').click()
            const productName = ProductLists.nth(i).getByText('Men Tshirt').first()
            console.log(productName)
            if (productName === product2) {
                await ProductLists.nth(i).getByText('Add to cart').click()
                
            }
            break
        }
    }
    await page.locator('.modal-content p a').click()
    await expect(page.locator('#product-1 a')).toHaveText('Blue Top')
    await expect(page.locator('#product-2 a')).toHaveText('Men Tshirt')

    // await page.locator('.modal-body').waitFor({ state: 'visible' })
    // await expect(page.locator('.modal-body')).toBeVisible()
    // await expect(page.locator('.modal-body h2')).toHaveText('Product added')
    // await page.locator('.modal-content p a').click()
    // await page.locator('.btn.btn-success.close-modal.btn-block').click()
    // const productName = ProductLists.nth(i).getByText('Blue Top').first()
    // console.log(productName)
    // if (productName === product) {
    //     await ProductLists.nth(i).getByText('Add to cart').click()


    // }

    await page.pause()

})