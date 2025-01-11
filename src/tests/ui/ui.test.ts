import { By, WebDriver } from 'selenium-webdriver';
import { getDriverInstance } from '../../driverHelper';
import { clickXpath, isXpathExists, sendTextToXpath } from '../../pageHelper';

let driver: WebDriver;
const url:string = "https://www.saucedemo.com/v1/";




beforeAll(async () => {
  driver = await getDriverInstance();
}, 30000);

afterAll(async () => {
  if(driver){
      await driver.quit();
  }
});

describe('E2E tests', () => {
  it('Login Test', async () => {

    await driver.get(url);
    await sendTextToXpath(driver,`//input[@data-test='username']`,'standard_user');
    await sendTextToXpath(driver,`//input[@data-test='password']`,'secret_sauce');
    await clickXpath(driver,`//input[@type='submit']`);
    const icon = isXpathExists(driver,`//*[@data-icon='shopping-card"]`)
    expect(icon,"The shopping cart Icon is missing").toBeTruthy();
  },300000);

});