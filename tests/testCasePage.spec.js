import { test } from '@playwright/test';
import {TestCasePage} from '../pageObjects/TestCasePage.js'

test('Testcase Page', async ({page}) => {
        const testCasePage = new TestCasePage(page)
        await testCasePage.navigateToHomePage()
        await testCasePage.NavigateToTestCasePage()

})