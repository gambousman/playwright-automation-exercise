# Test info

- Name: Logout User
- Location: C:\Users\HP\Desktop\automation-exercise\tests\logout.spec.js:5:9

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
   3 | import { LogoutPage } from '../pageObjects/LogoutPage.js'
   4 |
>  5 |     test('Logout User', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   6 |         const login = new LoginPage(page)
   7 |         const logout = new LogoutPage(page)
   8 |         await login.navigateToHomePage()
   9 |         await login.login('naima@yopmail.com', '123456')
  10 |         await login.successLogin()
  11 |         await logout.logout()
  12 |
  13 |     })
  14 |
  15 |     
```