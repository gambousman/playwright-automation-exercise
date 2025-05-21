# Test info

- Name: Testcase Page
- Location: C:\Users\HP\Desktop\automation-exercise\tests\testCasePage.spec.js:4:5

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
  2 | import {TestCasePage} from '../pageObjects/TestCasePage.js'
  3 |
> 4 | test('Testcase Page', async ({page}) => {
    |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  5 |         const testCasePage = new TestCasePage(page)
  6 |         await testCasePage.navigateToHomePage()
  7 |         await testCasePage.NavigateToTestCasePage()
  8 |
  9 | })
```