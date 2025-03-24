import { test, expect } from '@playwright/test';

test('should show submodule list when visit / submodule-list', async ({
    page,
  }) => {

    await goToSubmoduleList(page);

    await expect(page.getByRole('link').getByRole('heading', {level: 5})).toHaveCount(2);
  });

  test('should go to Projects when clicking on the projects link', async ({
    page,
  }) => {

    await goToSubmoduleList(page);

    await page.getByRole('link').getByText('Proyectos').click();
  
    await expect(page).toHaveURL("http://localhost:5173/#/projects");
  });

  test('should go to Employees when clicking on the employees link', async ({
    page,
  }) => {

    await goToSubmoduleList(page);

    await page.getByRole('link').getByText('Empleados').click();
  
    await expect(page).toHaveURL("http://localhost:5173/#/employees");
  });

async function goToSubmoduleList(page) {
    await page.goto('#/login');
    await page.fill('input[name="user"]', 'admin');
    await page.fill('input[name="password"]', 'test');
    await page.getByRole('button', { name: /login/i }).click();

    await page.goto('#/submodule-list');
}
