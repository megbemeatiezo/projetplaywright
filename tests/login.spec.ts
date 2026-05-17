import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';

import { LoginPage } from '../pages/LoginPage';
import { DashBoardPage } from '../pages/DashBoardPage';

test.describe('Login Tests', () => {

  test('Successful login', async ({ page }) => {

    // Description visible dans Allure
    await allure.description(
      'Validation du login utilisateur et accès au dashboard'
    );

    // Tags
    await allure.tags('login', 'smoke');

    // Sévérité
    await allure.severity('critical');

    // Instanciation des pages
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashBoardPage(page);

    await allure.step('Ouvrir la page login', async () => {
      await loginPage.gotoLoginPage();
    });

    await allure.step('Vérifier que la page login est chargée', async () => {
      await loginPage.verifyLoginPageLoaded();
    });

    await allure.step('Connexion utilisateur', async () => {
      await loginPage.login('Admin', 'admin123');
    });

    await allure.step('Vérifier chargement dashboard', async () => {
      await dashboardPage.verifyDashboardLoaded();
    });

    await allure.step('Vérifier utilisateur connecté', async () => {
      await dashboardPage.verifyUserConnected();
    });

    await allure.step('Vérifier URL dashboard', async () => {
      await dashboardPage.verifyUrlContains('dashboard');
    });

  });

});