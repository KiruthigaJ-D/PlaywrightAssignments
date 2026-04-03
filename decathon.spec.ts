import {test,expect} from '@playwright/test'
test(`Decathlon`, async({page})=>
{
    //Launch the browser
    await page.goto ("https://www.decathlon.in/")
    await page.waitForLoadState('domcontentloaded')
    //Verify the user is navigated to the Decathlon home page
    const title= await page.title()
    console.log(title);
    await expect(page).toHaveTitle(/Buy Sporting Goods, Sportswear and Equipments/)
    //Click on the Search icon on the home page
    await page.locator('//span[text()="Search for  "]').first().click()
    const search=page.getByPlaceholder('Search For 60+ Sports and 6000+ Products')
    //Verify the search input field is enabled
    await expect(search).toBeEnabled();
    //Enter the product name as "shoes" in the search field
    await search.fill('shoes')
    //Press Enter to search the product
    await page.keyboard.press('Enter')
    //Capture and print the page title in the console
    //Verify the page title is displayed as "Search | shoes"
     await expect(page).toHaveTitle('Search | shoes');
     const pageTitle= await page.title()
     console.log(pageTitle);
     //Click on the "Men" gender filter
      await page.locator('//span[contains(text(),"Men")]').click()
      await page.waitForLoadState('networkidle');
//Click on the shoe size filter "UK 10.5"
      await page.locator('//span[contains(text(),"10.5")]').first().click()
       await page.waitForLoadState('networkidle');
    //Click on the "Running" category filter
    await page.locator('//span[contains(text(),"Running")]').first().click()
     await page.waitForLoadState('networkidle');
     //Click on the Sort option
    await page.locator('//span[contains(text(),"Relevant")]').click()
    //Select the sorting option "Price: High to Low"
    await page.locator('//a[contains(text(),"Price: High to Low")]').click()
    //Click on the first product from the displayed product list
    await page.getByText(/Men Running Shoes/).first().click()
     await page.waitForLoadState('networkidle');    
    //Select the shoe size "UK 10.5 - EU 45" on the product detail page
    await page.getByText(/10.5/).click()
    await page.waitForLoadState('networkidle');
    //Click on the "Add to Cart" button
    await page.getByRole('button', { name: 'addToCart' }).click()
    await expect(page.getByText(/Product added to cart/)).toBeVisible()
    await page.waitForLoadState('networkidle');
    //Click on the Cart option
    await page.locator('//p[text()="Cart"]').click();
    //Fetch the total cart value
    let cartTotal= await page.locator('//p[text()="Total"]/following::p[@classname="font-semibold"]').innerText();
    //Print the total cart amount in the console
    console.log(`Total Cart Value: ${cartTotal}`);
}
)