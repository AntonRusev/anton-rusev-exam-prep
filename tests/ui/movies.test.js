const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('https://ar-exam-prep.onrender.com/');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  