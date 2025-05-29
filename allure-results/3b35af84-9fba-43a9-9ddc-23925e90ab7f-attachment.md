# Test info

- Name: Brand Module
- Location: C:\Users\HP\Desktop\automation-exercise\tests\viewBrandProducts.spec.js:4:5

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
   1 | import {BrandPage} from "../pageObjects/BrandPage.js"
   2 | import {test} from "@playwright/test"
   3 |
>  4 | test('Brand Module', async ({page}) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   5 |     const brand = new BrandPage(page)
   6 |     await brand.navigateToHomePage()
   7 |     await brand.validateBrandIsVisible()
   8 |     await brand.selectBrand()
   9 |     await brand.verifyBrandTitle()
  10 |     
  11 | })
```