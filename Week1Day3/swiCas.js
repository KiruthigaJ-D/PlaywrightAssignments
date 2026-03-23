//if else and switch

function launchBrowser()
{
    let browserName="Safari"

    if(browserName==="Chrome")
    {
        console.log("The browser name is"+ browserName);
    }
    else
    {console.log("The browser name is not chrome");

    }
}

launchBrowser();

function runTest(testType)
{
    
    switch (testType)
     {
        case 1:
        console.log("smoke")
        break;

        case 2:
        console.log("sanity")
        break;

        case 3:
        console.log("regression")            
        break;

        default:
        console.log("Smoke")
        break;
    }
}

runTest(2)
runTest(5)
