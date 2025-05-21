# Test info

- Name: Login Module >> Login user with incorrect email and password
- Location: C:\Users\HP\Desktop\automation-exercise\tests\login.spec.js:13:9

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
   2 | import { LoginPage } from '../pageObjects/LoginPage.js'
   3 |
   4 | let login
   5 | test.beforeEach(async ({ browser }) => {
   6 |     const page = await browser.newPage();
   7 |     login = new LoginPage(page);
   8 |     await login.navigateToHomePage();
   9 |   });
  10 |
  11 | test.describe('Login Module',() => {
  12 |     
> 13 |     test('Login user with incorrect email and password', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  14 |         await login.login('naima@yopmail.com', '12345')
  15 |         await login.errorLogin()
  16 |
  17 |     })
  18 |
  19 |     test('Login user with correct email and password', async ({page}) => {
  20 |         await login.login('naima@yopmail.com', '123456')
  21 |         await login.successLogin()
  22 |    
  23 |     })
  24 | })
```