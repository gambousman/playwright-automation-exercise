# Test info

- Name: Place Order Module >> Place order: Register while checkout
- Location: C:\Users\HP\Desktop\automation-exercise\tests\placeOrder.spec.js:17:9

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
   2 | import {LoginPage} from '../pageObjects/LoginPage.js'
   3 | import {PlaceOrderPage} from '../pageObjects/PlaceOrderPage.js'
   4 | import { RegisterPage} from '../pageObjects/RegisterPage.js'
   5 | import {ProductPage} from '../pageObjects/ProductPage.js'
   6 | import { faker } from '@faker-js/faker';
   7 |
   8 | // let placeOrderPage
   9 | // let productPage
  10 | // test.beforeEach(async ({ browser }) => {
  11 | //     const page = await browser.newPage();
  12 | //     placeOrderPage = new PlaceOrderPage(page)
  13 | //     productPage = new ProductPage(page)
  14 | //   });
  15 |
  16 | test.describe('Place Order Module',() => {
> 17 |     test('Place order: Register while checkout', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  18 |         const placeOrderPage = new PlaceOrderPage(page)
  19 |         const registerPage = new RegisterPage(page)
  20 |         const productPage = new ProductPage(page)
  21 |         await productPage.navigateToHomePage()
  22 |         await productPage.navigatetoProductPage()
  23 |         await productPage.addProductToCart()
  24 |         await productPage.validateProductInCart()
  25 |         await placeOrderPage.checkout()
  26 |         await placeOrderPage.navigateToRegisterPage()
  27 |         await registerPage.register('Nana', faker.internet.email())
  28 |         await registerPage.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')
  29 |         await placeOrderPage.clickCartButton()
  30 |         await placeOrderPage.checkout()
  31 |         await placeOrderPage.validateDeliveryAddress()
  32 |         await placeOrderPage.validateOrderSummary()
  33 |         await placeOrderPage.fillOrderDescription('This is a test order')
  34 |         await placeOrderPage.clickOrderButton()
  35 |         await placeOrderPage.validatePaymentPage()
  36 |         await placeOrderPage.fillPaymentDetails('Nana Doe', '1234567812345678', '12', '2025', '123')
  37 |         await placeOrderPage.clickPayAndConfirmOrderButton()
  38 |         await placeOrderPage.validateOrderConfirmation()    
  39 | })
  40 | test('Place order: Register before checkout', async ({page}) => {
  41 |     const placeOrderPage = new PlaceOrderPage(page)
  42 |     const registerPage = new RegisterPage(page)
  43 |     const productPage = new ProductPage(page)
  44 |     await registerPage.navigateToHomePage()
  45 |     await registerPage.clickSignUpLink()
  46 |     await registerPage.register('Nana', faker.internet.email())
  47 |     await registerPage.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')
  48 |     await productPage.addProductToCart()
  49 |     await productPage.validateProductInCart()
  50 |     await placeOrderPage.checkout()
  51 |     await placeOrderPage.validateDeliveryAddress()
  52 |     await placeOrderPage.validateOrderSummary()
  53 |     await placeOrderPage.fillOrderDescription('This is a test order')
  54 |     await placeOrderPage.clickOrderButton()
  55 |     await placeOrderPage.validatePaymentPage()
  56 |     await placeOrderPage.fillPaymentDetails('Nana Doe', '1234567812345678', '12', '2025', '123')
  57 |     await placeOrderPage.clickPayAndConfirmOrderButton()
  58 |     await placeOrderPage.validateOrderConfirmation()
  59 |
  60 |
  61 | })
  62 | test('Place order: Login before checkout', async ({page}) => {
  63 |     const placeOrderPage = new PlaceOrderPage(page)
  64 |     const loginPage = new LoginPage(page)
  65 |     const productPage = new ProductPage(page)
  66 |     await loginPage.navigateToHomePage()
  67 |     await loginPage.login('naima@yopmail.com', '123456')
  68 |     await loginPage.successLogin()
  69 |     await productPage.addProductToCart()
  70 |     await productPage.validateProductInCart()
  71 |     await placeOrderPage.checkout()
  72 |     await placeOrderPage.validateDeliveryAddress()
  73 |     await placeOrderPage.validateOrderSummary()
  74 |     await placeOrderPage.fillOrderDescription('This is a test order')
  75 |     await placeOrderPage.clickOrderButton()
  76 |     await placeOrderPage.validatePaymentPage()
  77 |     await placeOrderPage.fillPaymentDetails('Nana Doe', '1234567812345678', '12', '2025', '123')
  78 |     await placeOrderPage.clickPayAndConfirmOrderButton()
  79 |     await placeOrderPage.validateOrderConfirmation()
  80 | })
  81 |
  82 | })
```