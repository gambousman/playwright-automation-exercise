import { test } from '@playwright/test';
import {TestCasePage} from '../pageObjects/TestCasePage.js'

test('Testcase Page', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        const testCasePage = new TestCasePage(page)
        await testCasePage.navigateToHomePage()
        await testCasePage.NavigateToTestCasePage()

})