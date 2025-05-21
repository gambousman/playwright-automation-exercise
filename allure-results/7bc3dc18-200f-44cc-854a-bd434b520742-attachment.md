# Test info

- Name: Place order: Register while checkout
- Location: C:\Users\HP\Desktop\automation-exercise\tests\downloadInvoice.spec.js:8:9

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
   1 | import { test } from '@playwright/test'
   2 | import {PlaceOrderPage} from '../pageObjects/PlaceOrderPage.js'
   3 | import { RegisterPage} from '../pageObjects/RegisterPage.js'
   4 | import {ProductPage} from '../pageObjects/ProductPage.js'
   5 | import { faker } from '@faker-js/faker';
   6 |
   7 |
>  8 |     test('Place order: Register while checkout', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   9 |         const placeOrderPage = new PlaceOrderPage(page)
  10 |         const registerPage = new RegisterPage(page)
  11 |         const productPage = new ProductPage(page)
  12 |         await productPage.navigateToHomePage()
  13 |         await productPage.navigatetoProductPage()
  14 |         await productPage.addProductToCart()
  15 |         await productPage.validateProductInCart()
  16 |         await placeOrderPage.checkout()
  17 |         await placeOrderPage.navigateToRegisterPage()
  18 |         await registerPage.register('Nana', faker.internet.email())
  19 |         await registerPage.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')
  20 |         await placeOrderPage.clickCartButton()
  21 |         await placeOrderPage.checkout()
  22 |         await placeOrderPage.validateDeliveryAddress()
  23 |         await placeOrderPage.validateOrderSummary()
  24 |         await placeOrderPage.fillOrderDescription('This is a test order')
  25 |         await placeOrderPage.clickOrderButton()
  26 |         await placeOrderPage.validatePaymentPage()
  27 |         await placeOrderPage.fillPaymentDetails('Nana Doe', '1234567812345678', '12', '2025', '123')
  28 |         await placeOrderPage.clickPayAndConfirmOrderButton()
  29 |         await placeOrderPage.validateOrderConfirmation()
  30 |         await productPage.clickInvoiceButton()    
  31 | })
  32 |
```