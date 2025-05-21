# Test info

- Name: Product Category Module >> Men Product Category
- Location: C:\Users\HP\Desktop\automation-exercise\tests\viewCategoryProducts.spec.js:14:5

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
   1 | import {CategoryPage} from "../pageObjects/CategoryPage.js"
   2 | import {test} from "@playwright/test"
   3 |
   4 | test.describe('Product Category Module',() => {
   5 |
   6 | test('Women Product Category', async ({page}) => {
   7 |     const category = new CategoryPage(page)
   8 |     await category.navigateToHomePage()
   9 |     await category.validateCategoryIsVisible()
  10 |     await category.selectWomenCategory()
  11 |     await category.selectDressCategory()
  12 |     await category.validateCategoryTitleWomen()    
  13 | })
> 14 | test('Men Product Category', async ({page}) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\HP\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  15 |     const category = new CategoryPage(page)
  16 |     await category.navigateToHomePage()
  17 |     await category.selectMenCategory()
  18 |     await category.selectShirtCategory()
  19 |     await category.validateCategoryTitleMen()    
  20 | })
  21 | })
```