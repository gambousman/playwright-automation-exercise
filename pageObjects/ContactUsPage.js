import { expect } from '@playwright/test';
exports.ContactUsPage =
class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.contactUsLink = page.locator('a[href="/contact_us"]')
    this.contactUsHeading = page.locator('div[class=\'contact-form\'] h2[class=\'title text-center\']');
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.locator('[data-qa="subject"]');
    this.messageInput = page.locator('[data-qa="message"]');
    this.uploadFileButton = page.locator('[name="upload_file"]');
    this.handleDialog = page.on('dialog', async dialog => {
      expect(dialog.type()).toContain('confirm')
      expect(dialog.message()).toContain('Press OK to proceed!')
      await dialog.accept()
  })
    this.submitButton = page.locator('[data-qa="submit-button"]');
    this.successMessage = page.locator('div[class=\'status alert alert-success\']');
    this.homeLink = page.getByRole('link', { name: ' Home' });
    this.validateHomeScreen = page.getByRole('link', { name: 'Signup / Login' });
    
  }
  async navigateToHomePage() {
    await this.page.goto('https://automationexercise.com/')
  }
  async validateHomePage() {
    await expect(this.validateHomeScreen).toBeVisible()
    
  }
    async navigatetoContactUsPage() {
        await this.contactUsLink.click()
        await expect(this.contactUsHeading).toBeVisible()
    }
  async fillContactUsForm(name, email, subject, message) {
    await expect(this.contactUsHeading).toHaveText('Get In Touch')
    await this.nameInput.fill(name)
    await this.emailInput.fill(email)
    await this.subjectInput.fill(subject)
    await this.messageInput.fill(message)
    await this.uploadFileButton.click()
        const filePath = 'tests/uploadFiles/testFile.pdf'
        const fileInput = this.uploadFileButton
        await fileInput.setInputFiles(filePath)
  }
  async handleDialogs() {
    await this.handleDialog
  }
  async submitForm(){
    await this.submitButton.click()
  }
  async validateSuccessMessage() {
    await expect(this.successMessage).toHaveText('Success! Your details have been submitted successfully.')
  }
    async clickHomeLink() {
        await this.homeLink.click()
    }
}