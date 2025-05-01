import { expect } from '@playwright/test';
exports.PlaceOrderPage =
    class PlaceOrderPage {
        constructor(page) {
            this.page = page;
            this.registerBtn = page.locator('.modal-content a[href="/login"]')
            this.cartButton = page.locator('.navbar-nav a[href="/view_cart"]')
            this.checkoutButton = page.locator('.check_out')
            this.deliveryAddressTitle = page.locator('#address_delivery .address_title')
            this.deliveryAddressName = page.locator('#address_delivery .address_firstname')
            this.deliveryAddressCity = page.locator('#address_delivery .address_city')
            this.deliveryAddressCountry = page.locator('#address_delivery .address_country_name')
            this.deliveryAddressPhone = page.locator('#address_delivery .address_phone')
            this.orderSummary = page.locator('#cart_info')
            this.orderSummaryProductDescription = page.locator('.cart_menu .description')
            this.orderSummaryPrice = page.locator('.cart_menu .price')
            this.orderSummaryQty = page.locator('.cart_menu .quantity')
            this.orderSummaryTotal = page.locator('.cart_menu .total')
            this.orderDescriptionText = page.locator('[name="message"]')
            this.orderButton = page.locator('[href="/payment"]')
            this.paymentPageTitle = page.locator('.heading')
            this.nameOnCardInput = page.locator('[data-qa="name-on-card"]')
            this.cardNumberInput = page.locator('[data-qa="card-number"]')
            this.cardExpiryMonthInput = page.locator('[data-qa="expiry-month"]')
            this.cardExpiryYearInput = page.locator('[data-qa="expiry-year"]')
            this.cardCVCInput = page.locator('[data-qa="cvc"]')
            this.payAndConfirmOrderButton = page.locator('[data-qa="pay-button"]')
            this.confirmOrder = page.locator('[data-qa="order-placed"]')


        }
        async navigateToHomePage() {
            await this.page.goto('https://automationexercise.com/');
        }
        async navigateToRegisterPage() {
            await this.registerBtn.click()
        }
        async checkout() {
            await this.checkoutButton.click()
        }
        async clickCartButton() {
            await this.cartButton.click()
        
        }
        async validateDeliveryAddress() {

            await expect(this.deliveryAddressTitle).toHaveText('Your delivery address')
            await expect(this.deliveryAddressName).toBeVisible()
            await expect(this.deliveryAddressCity).toBeVisible()
            await expect(this.deliveryAddressCity).toBeVisible()
            await expect(this.deliveryAddressPhone).toBeVisible()
            

        }
        async validateOrderSummary() {
            await expect(this.orderSummary).toBeVisible()
            await expect(this.orderSummaryProductDescription).toBeVisible()
            await expect(this.orderSummaryPrice).toBeVisible()
            await expect(this.orderSummaryQty).toBeVisible()
            await expect(this.orderSummaryTotal).toBeVisible()
        }
        async fillOrderDescription(description) {
            await this.orderDescriptionText.fill(description)
        }
        async clickOrderButton() {
            await this.orderButton.click()
        }
        async validatePaymentPage() {
            await expect(this.paymentPageTitle).toBeVisible()
            await expect(this.paymentPageTitle).toHaveText('Payment')
        }
        async fillPaymentDetails(nameOnCard, cardNumber, expiryMonth, expiryYear, cvc) {
            await this.nameOnCardInput.fill(nameOnCard)
            await this.cardNumberInput.fill(cardNumber)
            await this.cardExpiryMonthInput.fill(expiryMonth)
            await this.cardExpiryYearInput.fill(expiryYear)
            await this.cardCVCInput.fill(cvc)
        }
        async clickPayAndConfirmOrderButton() {
            await this.payAndConfirmOrderButton.click()
        }
        async validateOrderConfirmation() {
            await expect(this.confirmOrder).toBeVisible()
            await expect(this.confirmOrder).toHaveText('Order Placed!')
        }
    }