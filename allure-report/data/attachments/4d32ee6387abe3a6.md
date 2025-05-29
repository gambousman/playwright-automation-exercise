# Test info

- Name: Search Product and verify product in cart after login 
- Location: C:\Users\HP\Desktop\automation-exercise\tests\searchProductAndVerifyCartAfterLogin.spec.js:5:5

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
   1 | import {LoginPage} from "../pageObjects/LoginPage.js"
   2 | import {ProductPage} from "../pageObjects/ProductPage.js"
   3 | import {test} from "@playwright/test"
   4 |
>  5 | test('Search Product and verify product in cart after login ', async ({page}) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   6 |     const login = new LoginPage(page)
   7 |     const product = new ProductPage(page)
   8 |     await product.navigateToHomePage()
   9 |     await product.validateHomePage()
  10 |     await product.navigatetoProductPage()
  11 |     await product.searchProduct()
  12 |     await product.getSearchedProductNames()
  13 |     await product.addProductToCart()
  14 |     await product.validateProductInCart()
  15 |     await login.login('naima@yopmail.com', '123456')
  16 |     await login.successLogin()
  17 |     await product.clickCartButton()   
  18 | })
```