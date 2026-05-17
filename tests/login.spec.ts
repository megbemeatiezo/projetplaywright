import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Tests', () => {

  test('Successful login', async ({ page }) => {

    // Instanciation des pages
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Ouvrir la page login
    await loginPage.gotoLoginPage();

    // Vérifier que la page login est chargée
    await loginPage.verifyLoginPageLoaded();

    // Connexion
    await loginPage.login('Admin', 'admin123');

    // Vérifications dashboard
    await dashboardPage.verifyDashboardLoaded();

    // Vérification utilisateur connecté
    await dashboardPage.verifyUserConnected();

    // Vérification URL
    await dashboardPage.verifyUrlContains('dashboard');
  });

});