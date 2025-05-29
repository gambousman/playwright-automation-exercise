# Test info

- Name: Add Product to Cart
- Location: C:\Users\HP\Desktop\automation-exercise\tests\addProductToCart.spec.js:4:5

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
   1 | import { test} from '@playwright/test';
   2 | import { ProductPage } from '../pageObjects/ProductPage.js'
   3 |
>  4 | test('Add Product to Cart', async ({page}) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   5 |     const productPage = new ProductPage(page)
   6 |     await productPage.navigateToHomePage()
   7 |     await productPage.validateHomePage()
   8 |     await productPage.navigatetoProductPage()
   9 |     await productPage.addProductToCart()
  10 |     await productPage.validateProductInCart()
  11 |     page.pause()
  12 |
  13 |    })
```