import { expect } from '@playwright/test';
exports.CategoryPage =
    class CategoryPage {
        constructor(page) {
            this.page = page;
            this.verifyCategoryIsVisible = page.getByRole('.left-sidebar h2', { name: 'Category' });