//Sum of numbers in an array 
let arr=[23,44,56,98,77]
let sum=0
for (let i=0;i<arr.length-1;i++){
    sum=sum+arr[i]
}
console.log(sum)

// Call back function
let browser="chrome"
function checkBrowserversion(version){
    console.log("Checking Browser version")

    setTimeout(()=>{
        console.log("Waiting for two seconds before executing the call back function")
        version()
    }, 2000)
}

function printVersion(){
    console.log(`Browser version : ${browser}`)
}
checkBrowserversion(printVersion)
