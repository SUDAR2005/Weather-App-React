import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

(async function authCardTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('http://localhost:5173/public/login');
    await driver.wait(until.elementLocated(By.css('.main-card')), 10000);

    console.log("Testing login flow...");
    const loginButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Login']")), 5000);
    await loginButton.click();

    const nameInput = await driver.wait(until.elementLocated(By.id('name')), 5000);
    const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 5000);

    await nameInput.sendKeys('testuser');
    await passwordInput.sendKeys('testpassword');

    const submitButton = await driver.wait(until.elementLocated(By.css('.btn button')), 5000);
    await submitButton.click();
    await driver.sleep(2000);

    const pageSource = await driver.getPageSource();
    assert(!pageSource.includes("Error"), "Login test failed!");

    console.log("Testing signup flow...");
    const signupButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Login']"), 5000));
    await signupButton.click();

    const confirmPasswordInput = await driver.wait(until.elementLocated(By.id('confirmPassword')), 5000);
    
    await nameInput.clear();
    await nameInput.sendKeys('newuser');
    await passwordInput.clear();
    await passwordInput.sendKeys('newpassword');
    await confirmPasswordInput.sendKeys('newpassword');

    await submitButton.click();
    await driver.sleep(2000);

    const signupPageSource = await driver.getPageSource();
    assert(!signupPageSource.includes("Error"), "Signup test failed!");

    console.log("All tests passed!");

  } catch (err) {
    console.error("Test failed: ", err);
  } finally {
    await driver.quit();
  }
})();
