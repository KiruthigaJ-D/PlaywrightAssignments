import{test, expect} from '@playwright/test'
test('PVR ticket booking', async({page})=>
{
//Launch the browser 
await page.goto("https://www.pvrcinemas.com/")
await page.waitForLoadState('domcontentloaded')
//Navigate to https://www.pvrcinemas.com/.
const title= await page.title()
console.log(title);
await expect(page).toHaveTitle(/PVR Cinemas/)
//Select the required city.
const search =page.getByPlaceholder('Search for city')
await expect(search).toBeEnabled();
await search.fill('Chennai')
await page.locator('//li[text()="Chennai"]').click()


// Click on the Cinema option.
await page.locator('//span[text()="Cinema"]').click()

// Click on Select Cinema dropdown.
await page.locator('//span[text()="Select Cinema"]').click()

// Select any available cinema from the list.
await page.getByText("INOX National,Virugambakkam Chennai").click()
await page.waitForLoadState('networkidle');

// Select any available date (Today/Tomorrow/Upcoming).
await page.getByText(/Tomorrow/).click();
await page.waitForLoadState('networkidle');

// Select any available movie from the movie list.
const movie = page.locator('(//li[@class="p-dropdown-item"])[1]')
await movie.click();
await page.waitForLoadState('networkidle');

// Select any available show time.
await page.locator('(//span[@class="mx-2"]/ancestor::li)[2]').click()

// Click on the Submit button.
await page.locator('//div[@class="quick-lefts "]//span[text()="Book"]').click();


// Accept the consent/cookie popup if displayed.
 await page.getByRole('button', {name:"Accept"}).click()

// Accept any additional confirmation popup if displayed.

// Select any available seat from the seating layout.
await page.locator("//span[@id='SL.SILVER|B:6']").click()
await page.waitForTimeout(4000)

// Verify the selected seat information is displayed.
const selectedSeat = await page.locator('//div[@class="seat-number"]').innerText()
console.log(selectedSeat);
if(selectedSeat === "6"){
    console.log("Selected seat information is displayed correctly.")
} 
else {
    console.log("Selected seat information is not displayed correctly.")}

// Verify the total ticket amount is displayed.
 await expect(page.getByText("Grand-Total")).toBeVisible
    
    
// Verify the page title is displayed correctly.
const pageTitle = await page.title()
    console.log(`The page title is ${pageTitle}`)
//proceed
    await page.getByRole('button',{name:"Proceed"}).click()

})