# Test info

- Name: Verify Product Quantity in Cart
- Location: C:\Users\HP\Desktop\automation-exercise\tests\productQtyInCart.spec.js:5:9

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
   2 | import { ProductPage } from '../pageObjects/ProductPage.js'
   3 | import { ProductQtyPage } from '../pageObjects/ProductQtyPage.js'
   4 |
>  5 |     test('Verify Product Quantity in Cart', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   6 |         const productPage = new ProductPage(page)
   7 |         const productQtyPage = new ProductQtyPage(page)
   8 |         await productPage.navigateToHomePage()
   9 |         await productPage.validateHomePage()
  10 |         await productPage.navigatetoProductPage()
  11 |         await productPage.viewProduct()
  12 |         await productQtyPage.addProductQty()
  13 |         await productQtyPage.validateProductQty()
  14 |         
  15 |     })
```