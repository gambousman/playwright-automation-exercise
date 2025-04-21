import { expect } from '@playwright/test';
exports.RegisterPage =
class RegisterPage {
    constructor(page) {
        this.page = page;
        this.verifyHomePage = page.getByRole('link', { name: 'Signup / Login' });
        this.signupLink = page.getByRole('link', { name: 'Signup / Login' });
        this.signupHeading = page.getByRole('heading', { name: 'New User Signup!' });
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.accountInfoHeading = page.getByRole('heading', { name: 'Enter Account Information' });
        this.mrRadio = page.getByRole('radio', { name: 'Mr.' });
        this.passwordInput = page.locator('#password');
        this.daysSelect = page.locator('#days');
        this.monthsSelect = page.locator('#months');
        this.yearsSelect = page.locator('#years');
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.specialOffersCheckbox = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.addressInput = page.locator('#address1');
        this.countrySelect = page.locator('#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.accountCreatedHeading = page.getByRole('heading', { name: 'Account Created!' });
        this.continueButton = page.locator('[data-qa="continue-button"]');
        this.loggedInAs = page.locator('ul li:nth-child(10)');
        this.errorSignup = page.locator('.signup-form p');
    
    }

    async navigateToHomePage() {
        await this.page.goto('https://automationexercise.com/');
        
      }
    
      async register(name, email) {
        await expect(this.verifyHomePage).toBeVisible();
        await this.signupLink.click();
        await expect(this.signupHeading).toBeVisible();
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    
      }

      
      async fillAccountInformation(password, day, month, year, firstName, lastName, company, address, country, state, city, zipcode, mobileNumber) {
        await expect(this.accountInfoHeading).toBeVisible();
        await this.mrRadio.check();
        await this.passwordInput.fill(password);
        await this.daysSelect.selectOption(day);
        await this.monthsSelect.selectOption(month);
        await this.yearsSelect.selectOption(year);
        await this.newsletterCheckbox.check();
        await this.specialOffersCheckbox.check();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.addressInput.fill(address);
        await this.countrySelect.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);
        await this.mobileNumberInput.fill(mobileNumber);
        await this.createAccountButton.click();
        await expect(this.accountCreatedHeading).toBeVisible();
        await this.continueButton.click();
        await expect(this.loggedInAs).toContainText(`Logged in as ${firstName}`);
      }

      async errorMsg() {
        await expect(this.errorSignup).toContainText('Email Address already exist!');
        
    
      }
    
}    