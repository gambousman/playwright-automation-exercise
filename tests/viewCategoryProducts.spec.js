import {CategoryPage} from "../pageObjects/CategoryPage.js"
import {test} from "@playwright/test"

test.describe('Product Category Module',() => {

test('Women Product Category', async ({page}) => {
    const category = new CategoryPage(page)
    await category.navigateToHomePage()
    await category.validateCategoryIsVisible()
    await category.selectWomenCategory()
    await category.selectDressCategory()
    await category.validateCategoryTitleWomen()    
})
test('Men Product Category', async ({page}) => {
    const category = new CategoryPage(page)
    await category.navigateToHomePage()
    await category.selectMenCategory()
    await category.selectShirtCategory()
    await category.validateCategoryTitleMen()    
})
})