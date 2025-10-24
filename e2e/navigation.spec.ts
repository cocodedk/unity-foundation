import {test, expect} from '@playwright/test';

test.describe('Header and footer navigation', () => {
  test('Header links route to localized pages', async ({page}) => {
    await page.goto('/en');

    // Test About navigation
    await page.getByRole('link', {name: 'About'}).first().click();
    await expect(page).toHaveURL(/\/en\/about/);
    await expect(page.getByRole('heading', {name: /about/i})).toBeVisible();

    // Test Programs navigation
    await page.getByRole('link', {name: 'Programs'}).first().click();
    await expect(page).toHaveURL(/\/en\/programs/);
    await expect(page.getByRole('heading', {name: /what we do/i})).toBeVisible();

    // Test Updates navigation
    await page.getByRole('link', {name: 'Updates'}).first().click();
    await expect(page).toHaveURL(/\/en\/updates/);
    await expect(page.getByRole('heading', {name: /latest updates/i})).toBeVisible();

    // Test Donate navigation
    await page.getByRole('link', {name: 'Donate'}).first().click();
    await expect(page).toHaveURL(/\/en\/donate/);
    await expect(page.getByRole('heading', {name: /donate/i})).toBeVisible();

    // Test Contact navigation
    await page.getByRole('link', {name: 'Contact'}).first().click();
    await expect(page).toHaveURL(/\/en\/contact/);
    await expect(page.getByRole('heading', {name: /contact/i, level: 1})).toBeVisible();
  });

  test('Footer links exist and are clickable', async ({page}) => {
    await page.goto('/en');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check main navigation links in footer
    await expect(footer.getByRole('link', {name: 'About', exact: true})).toBeVisible();
    await expect(footer.getByRole('link', {name: 'Programs', exact: true})).toBeVisible();
    await expect(footer.getByRole('link', {name: 'Updates', exact: true})).toBeVisible();
    await expect(footer.getByRole('link', {name: 'Donate', exact: true})).toBeVisible();
    await expect(footer.getByRole('link', {name: 'Contact', exact: true})).toBeVisible();
  });

  test('Legal links in footer work', async ({page}) => {
    await page.goto('/en');
    const footer = page.locator('footer');

    await footer.getByRole('link', {name: /privacy/i}).click();
    await expect(page).toHaveURL(/\/en\/legal\/privacy/);

    await page.goBack();
    await footer.getByRole('link', {name: /cookies/i}).click();
    await expect(page).toHaveURL(/\/en\/legal\/cookies/);

    await page.goBack();
    await footer.getByRole('link', {name: /impressum/i}).click();
    await expect(page).toHaveURL(/\/en\/legal\/impressum/);
  });

  test('Mobile menu works on small screens', async ({page}) => {
    await page.setViewportSize({width: 375, height: 667});
    await page.goto('/en');

    // Menu should be hidden initially
    const mobileNav = page.locator('nav').first();
    await expect(mobileNav).not.toBeVisible();

    // Click hamburger to open menu
    await page.getByRole('button', {name: /toggle menu/i}).click();

    // Now navigation should be visible
    await expect(page.getByRole('link', {name: 'About'}).first()).toBeVisible();
  });
});
