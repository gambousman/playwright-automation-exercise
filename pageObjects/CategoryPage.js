import { expect } from '@playwright/test';
exports.CategoryPage =
    class CategoryPage {
        constructor(page) {
            this.page = page;
            this.verifyCategoryIsVisible = page.locator('.left-sidebar');
            this.categoryNameWomen = page.locator('div .panel-title [href="#Women"]')
            this.dressCategory = page.locator('[href="/category_products/1"]')
            this.verifyCategoryTitleWomen = page.locator('.title')
            this.categoryNameMen = page.locator('div .panel-title [href="#Men"]')
            this.shirtCategory = page.locator('[href="/category_products/3"]')
            this.verifyCategoryTitleMen = page.locator('.title')
        }
        async navigateToHomePage() {
            await this.page.goto('https://automationexercise.com/');
            
        }
        async validateCategoryIsVisible() {
            await expect(this.verifyCategoryIsVisible).toContainText('Category')
        }
        async selectWomenCategory() {
            await this.categoryNameWomen.click()
        }
        async selectDressCategory() {
            await this.dressCategory.click()
        }
        async validateCategoryTitleWomen() {
            await expect(this.verifyCategoryTitleWomen).toContainText('Women')
        }
        async selectMenCategory() {
            await this.categoryNameMen.click()
        }
        async selectShirtCategory() {
            await this.shirtCategory.click()
        }
        async validateCategoryTitleMen() {
            await expect(this.verifyCategoryTitleMen).toContainText('Men')
        }
    }