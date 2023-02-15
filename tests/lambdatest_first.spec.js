const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

test.describe('Homework Основные сценарии использования Playwright',
() => {

    test.use({
        viewport: {
            height: 950,
            width: 1920
        }
    });
    
    test('That user is able to go to test site > search for desired product > add it to the card > apply the coupon > go to checkout > place the order', async ({page}) => {
        // Go to test site
        await page.goto('https://ecommerce-playground.lambdatest.io/');
        
        await expect(page).toHaveTitle('Your Store');

        await page.getByRole('textbox', { name: 'Search For Products' }).click();
        // Search for MacBook
        await page.getByRole('textbox', { name: 'Search For Products' }).fill('Mac book pro');
        await page.getByRole('button', { name: 'Search' }).click();

        await expect(page).toHaveTitle('Search - Mac book pro');
        // Add the first item in the cart
        await expect(page.locator('#mz-product-grid-image-45-212469')).toBeVisible();
        await page.locator('#mz-product-grid-image-45-212469').hover();
        await page.locator('button.btn.btn-cart.cart-45 > i').click();
        // Click view cart
        await expect(page.getByText('Success: You have added MacBook Pro to your shopping cart!')).toBeVisible();
        await page.getByRole('link', { name: 'View Cart ' }).click();

        await expect(page).toHaveTitle('Shopping Cart');
        // On the cart page try to apply coupon
        await page.getByRole('heading', { name: 'Use Coupon Code ' }).locator('i').click();
        await page.getByPlaceholder('Enter your coupon here').fill('50%OFF');
        await page.getByRole('button', { name: 'Apply Coupon' }).click();

        await expect(page.locator('//*[@class="alert alert-danger alert-dismissible"]')).toHaveText('Warning: Coupon is either invalid, expired or reached its usage limit! ×');
        // Go to checkout
        await page.getByRole('link', { name: 'Checkout' }).click();

        await expect(page).toHaveTitle('Checkout');
        // Fill all the data
        await page.getByText('Guest Checkout').click();
        await page.getByRole('textbox', { name: 'First Name*' }).click();
        await page.getByRole('textbox', { name: 'First Name*' }).fill(faker.internet.userName());
        await page.getByRole('textbox', { name: 'Last Name*' }).click();
        await page.getByRole('textbox', { name: 'Last Name*' }).fill(faker.internet.userName('Test'));
        await page.getByRole('textbox', { name: 'E-Mail*' }).click();
        await page.getByRole('textbox', { name: 'E-Mail*' }).fill(faker.internet.email());
        await page.getByPlaceholder('Telephone').click();
        await page.getByPlaceholder('Telephone').fill(faker.phone.number('+7 916 ### ## ##'));

        await page.getByRole('textbox', { name: 'Address 1*' }).click();
        await page.getByRole('textbox', { name: 'Address 1*' }).fill(faker.address.streetAddress());
        await page.getByRole('textbox', { name: 'City*' }).click();
        await page.getByRole('textbox', { name: 'City*' }).fill(faker.address.cityName());
        await page.getByRole('textbox', { name: 'Post Code*' }).click();
        await page.getByRole('textbox', { name: 'Post Code*' }).fill(faker.address.zipCode());

        await page.getByText('I have read and agree to the Terms & Conditions').click();

        await page.getByRole('button', { name: 'Continue ' }).click();
        // Confirm order screen is shown
        await expect(page).toHaveTitle('Confirm Order');
        await page.screenshot({path: '.playwright-report/order_screenshot.png', fullPage: true});

        await page.getByRole('button', { name: 'Confirm Order ' }).click();
        // Order success screen
        await expect(page).toHaveTitle('Your order has been placed!');

        await page.getByRole('link', { name: 'Continue' }).click();
        // Main screen is shown
        await expect(page).toHaveTitle('Your Store');


       

    })
})