# Test info

- Name: Verify Subscription >> Verify Subscription in Cart page
- Location: C:\Users\HP\Desktop\automation-exercise\tests\subscription.spec.js:21:9

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test } from '@playwright/test';
   2 | const { faker } = require('@faker-js/faker');
   3 | import {SubscriptionPage} from '../pageObjects/SubscriptionPage.js'
   4 |
   5 | let subscriptionPage
   6 | test.beforeEach(async ({ browser }) => {
   7 |     const page = await browser.newPage();
   8 |     subscriptionPage = new SubscriptionPage(page)
   9 |     await subscriptionPage.navigateToHomePage();
  10 | });
  11 |
  12 | test.describe('Verify Subscription', () => {   
  13 |     test('Verify Subscription in Home page', async ({page}) => {
  14 |        
  15 |         await subscriptionPage.NavgateToSubscriptionInHomePage()
  16 |         await subscriptionPage.FillSubscriptionEmail(faker.internet.email())
  17 |         await subscriptionPage.ValidateSucessfulSubscription()     
  18 |
  19 |     })
  20 |
> 21 |     test('Verify Subscription in Cart page', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  22 |         
  23 |         await subscriptionPage.NavigateToSubscriptionInCartPage()
  24 |         await subscriptionPage.FillSubscriptionEmail(faker.internet.email())
  25 |         await subscriptionPage.ValidateSucessfulSubscription()
  26 |         
  27 |
  28 |     })
  29 | })
```