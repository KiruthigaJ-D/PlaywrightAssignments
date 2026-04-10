import {test} from "@playwright/test"

test(' Program to handle ServiceNow Service Catalog',async ({page}) => {

//Launch the ServiceNow application using the given URL.
await page.goto('https://dev280319.service-now.com/')

//Enter User name as admin.//Enter Password with valid credentials.
await page.locator('//input[@id="user_name"]').fill('admin')
await page.locator('//input[@id="user_password"]').fill('YApVc0-vyN5-')

//Click on the Log in button.
await page.getByRole('button',{name: "Log in"}).click()

//Wait for the ServiceNow home page to load successfully.
await page.waitForLoadState('domcontentloaded')

//Click on the All menu from the left navigation panel.
await page.getByRole('menuitem', { name: 'All' }).click()

//Click on Service Catalog from the menu options.
await page.getByText('Service Catalog').click() 

// Switch to the Service Catalog iframe.
const mobileframes=page.frameLocator('#gsft_main')

// Click on the Mobiles category.
await mobileframes.getByRole('link', { name: "Mobiles" , exact: true }).click()

// Select Apple iPhone 13 Pro from the product list.
const iphone= mobileframes.getByText("Apple iPhone 13 Pro").first()
await iphone.click()

// Choose Yes for the Lost or Broken iPhone option.
const lostIPhone= mobileframes.getByText("Yes")
await lostIPhone.click()

// Enter 99 in the Original phone number field.
const phoneNumber=mobileframes.getByRole('textbox', { name: "    What was the original phone number?" })
await phoneNumber.fill('99')

// Select Unlimited from the Monthly data allowance dropdown.
const dataAllowance=mobileframes.getByRole('combobox', { name:"Mandatory - must be populated before Submit" }).first()
await dataAllowance.selectOption('unlimited')

// Select Sierra Blue as the color option.
const colorOption=mobileframes.getByText("Sierra Blue").last()
await colorOption.click()

// Select 512 GB as the storage option.
const storageOption=mobileframes.getByText("512 GB").last()
await storageOption.click()

// Click on the Order Now button.
await mobileframes.getByRole('button', { name: "Order Now" }).click()

// Verify the confirmation message is displayed.
const confirmationMessage=mobileframes.getByText("Thank you, your request has been submitted")
await confirmationMessage.waitFor({ state: 'visible' })

// Capture a full-page screenshot of the order confirmation page.
await page.screenshot({ path: 'Utils/ServiceNowOrderConfirmation.png', fullPage: true })

})