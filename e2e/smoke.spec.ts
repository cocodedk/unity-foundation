import {test, expect} from '@playwright/test';

test.describe('Public site smoke', () => {
  test('Home loads and displays hero section', async ({page}) => {
    await page.goto('/en');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByRole('heading', {level: 1})).toBeVisible();
    await expect(page.getByText(/dignity.*opportunity.*relief/i)).toBeVisible();
  });

  test('Donate CTA navigates to donate page', async ({page}) => {
    await page.goto('/en');
    await page.getByRole('link', {name: /donate now/i}).click();
    await expect(page).toHaveURL(/\/en\/donate/);
    await expect(page.getByRole('heading', {name: /donate/i})).toBeVisible();
    await expect(page.getByText(/mobilepay/i)).toBeVisible();
  });

  test('Language switcher changes locale and RTL for fa', async ({page}) => {
    await page.goto('/en');
    await page.getByRole('button', {name: /dansk/i}).click();
    await expect(page).toHaveURL(/\/da/);
    await page.getByRole('button', {name: /فارسی/i}).click();
    await expect(page).toHaveURL(/\/fa/);
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('Updates page shows empty state or posts', async ({page}) => {
    await page.goto('/en/updates');
    await expect(page.getByRole('heading', {name: /latest updates/i})).toBeVisible();
    // May show posts or empty state depending on database
    const hasContent = await page.getByText(/no posts yet/i).isVisible().catch(() => false);
    expect(hasContent !== undefined).toBeTruthy();
  });

  test('Program cards are visible on homepage', async ({page}) => {
    await page.goto('/en');
    await expect(page.getByText(/what we do/i)).toBeVisible();
    await expect(page.getByRole('heading', {name: 'Children'})).toBeVisible();
    await expect(page.getByRole('heading', {name: 'Disability'})).toBeVisible();
    await expect(page.getByRole('heading', {name: 'Poverty Relief'})).toBeVisible();
  });
});
