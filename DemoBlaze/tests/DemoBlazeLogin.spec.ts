import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  // Go to https://demoblaze.com/
  await page.goto("https://demoblaze.com/");

  // Click a:has-text("Log in")
  await page.locator('a:has-text("Log in")').click();

  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page
    .locator(
      'text=Log in × Username: Password: Close Log in >> input[type="text"]'
    )
    .click();

  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page
    .locator(
      'text=Log in × Username: Password: Close Log in >> input[type="text"]'
    )
    .fill("admin");

  // Press Tab
  await page
    .locator(
      'text=Log in × Username: Password: Close Log in >> input[type="text"]'
    )
    .press("Tab");

  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page
    .locator(
      'text=Log in × Username: Password: Close Log in >> input[type="password"]'
    )
    .fill("admin");

  // Click button:has-text("Log in")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://demoblaze.com/' }*/),
    page.locator('button:has-text("Log in")').click(),
  ]);
});
