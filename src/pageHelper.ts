import { WebDriver, By, until, WebElement, promise } from 'selenium-webdriver';
import "jest-expect-message"



/**
 * @description Gets the text of the given element.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The targeted element.
 */
export async function getTextsFromElementsBySelector(driver: WebDriver, selector: string): Promise<string[]> {
  const elements = await driver.findElements(By.css(selector));
  return await Promise.all(elements.map(async (element) => await element.getText()));
};

/**
 * @description Click an element located by XPath.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} xpath - The XPath of the element to click.
 */
export async function clickXpath(driver: WebDriver, xpath: string): Promise<void> {
  try {
    const element: WebElement = await driver.findElement(By.xpath(xpath));
    await element.click();
  } catch (error) {
    console.error(`Error in clickXpath: ${error}`);
  }
}

/**
 * @description Sends text to element located by XPath.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} xpath - The XPath of the element to click.
 * @param {string} text - The text you want to send to your xpath.
 */
export async function sendTextToXpath(driver: WebDriver, xpath: string,text:string): Promise<void> {
  try {
    const element: WebElement = await driver.findElement(By.xpath(xpath));
    await element.sendKeys(text);
  } catch (error) {
    console.error(`Error in sendTextToXpath: ${error}`);
  }
}
/**
 * @description Click an element located by CSS selector.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element to click.
 */
export async function clickSelector(driver: WebDriver, selector: string): Promise<void> {
  try {
    const element: WebElement = await driver.findElement(By.css(selector));
    await element.click();
  } catch (error) {
    console.error(`Error in clickSelector: ${error}`);
  }
}

/**
 * @description Wait for an element located by XPath to be present.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} xpath - The XPath of the element to wait for.
 * @param {number} timeout - The maximum time to wait in milliseconds.
 */
export async function waitForXpath(driver: WebDriver, xpath: string, timeout: number = 10000): Promise<WebElement> {
  try {
    const element: WebElement = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    return element;
  } catch (error) {
    console.error(`Error in waitForXpath: ${error}`);
    throw error;
  }
}

/**
 * @description Wait for an element located by CSS selector to be present.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element to wait for.
 * @param {number} timeout - The maximum time to wait in milliseconds.
 */
export async function waitForSelector(driver: WebDriver, selector: string, timeout: number = 10000): Promise<WebElement> {
  try {
    const element: WebElement = await driver.wait(until.elementLocated(By.css(selector)), timeout);
    return element;
  } catch (error) {
    console.error(`Error in waitForSelector: ${error}`);
    throw error;
  }
}

/**
 * @description Check if an element located by XPath exists.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} xpath - The XPath of the element to check.
 * @param {number} timeout - The maximum time to wait in milliseconds.
 * @returns {Promise<boolean>} - True if the element exists, false otherwise.
 */
export async function isXpathExists(driver: WebDriver, xpath: string, timeout: number = 5000): Promise<boolean> {
  try {
    await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    return true;
  } catch {
    return false;
  }
}

/**
 * @description Count the number of elements located by XPath.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} xpath - The XPath of the elements to count.
 * @returns {Promise<number>} - The count of elements.
 */
export async function countElementsByXpath(driver: WebDriver, xpath: string): Promise<number> {
  try {
    const elements = await driver.findElements(By.xpath(xpath));
    return elements.length;
  } catch (error) {
    console.error(`Error in countElementsByXpath: ${error}`);
    throw error;
  }
}

/**
 * @description Check if an element located by CSS selector exists.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element to check.
 * @param {number} timeout - The maximum time to wait in milliseconds.
 * @returns {Promise<boolean>} - True if the element exists, false otherwise.
 */
export async function isSelectorExists(driver: WebDriver, selector: string, timeout: number = 10000): Promise<boolean> {
  try {
    await driver.wait(until.elementLocated(By.css(selector)), timeout);
    return true;
  } catch (error) {
    console.error(`Error in isSelectorExists: ${error}`);
    return false;
  }
}
