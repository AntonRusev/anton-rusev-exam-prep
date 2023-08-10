const { test, expect } = require('@playwright/test');

test('Check add movie page', async ({ page }) => {
    await page.goto('https://ar-exam-prep.onrender.com/');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  