
let browser = "Chrome";


function checkBrowserVersion(callback) {
    console.log("Running......");
    
    setTimeout(() => {
         callback(browser);
    }, 2000);
}


function displayVersion(browserName) {
    console.log("Browser version using callback: " + browserName);
}

checkBrowserVersion(displayVersion);
