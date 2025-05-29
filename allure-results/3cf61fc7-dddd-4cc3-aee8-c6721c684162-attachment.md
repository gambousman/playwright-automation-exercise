# Test info

- Name: Add Recommended Item To Cart
- Location: C:\Users\HP\Desktop\automation-exercise\tests\addRecommendedItemToCart.spec.js:5:5

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
   2 | import { RecommendedItemPage} from '../pageObjects/RecommendedItemPage.js'
   3 |
   4 |
>  5 | test('Add Recommended Item To Cart', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   6 |     const recommendedPage = new RecommendedItemPage(page)
   7 |     await recommendedPage.navigateToHomePage()
   8 |     await recommendedPage.validateRecommendedItemIsVisible()
   9 |     await recommendedPage.addRecommendedProductToCart()
  10 |     await recommendedPage.validateProductInCart()
  11 | })
  12 |
```