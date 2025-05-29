# Test info

- Name: User Registration Module >> Register User With Existing Email
- Location: C:\Users\HP\Desktop\automation-exercise\tests\registerUser.spec.js:14:9

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
   3 | import { RegisterPage } from '../pageObjects/RegisterPage.js'
   4 |
   5 | let register
   6 | test.beforeEach(async ({ browser }) => {
   7 |     const page = await browser.newPage();
   8 |     register = new RegisterPage(page)
   9 |     await register.navigateToHomePage();
  10 |     await register.clickSignUpLink()
  11 | });
  12 |
  13 | test.describe('User Registration Module', () => {
> 14 |     test('Register User With Existing Email', async ({ page }) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  15 |         
  16 |         await register.register('Nana', 'naima@yopmail.com')
  17 |         await register.errorMsg()
  18 |
  19 |     })
  20 |
  21 |     test('Register User', async ({ page }) => {
  22 |        
  23 |         await register.register('Nana', faker.internet.email())
  24 |         await register.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')
  25 |
  26 |     })
  27 | })
  28 |
  29 |
  30 |
  31 |
  32 |
  33 |
  34 |
  35 |
  36 |
  37 |
  38 |
  39 |
  40 |
  41 |
  42 |
  43 |
  44 |
  45 |
  46 |
  47 |
  48 |
  49 |
  50 |
  51 |
  52 |
  53 |
  54 |
  55 |
  56 |
  57 |
  58 |
  59 |
  60 |
  61 |
```