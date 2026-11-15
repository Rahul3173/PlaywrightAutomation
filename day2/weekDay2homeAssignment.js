// PALINDROME

//Method 1
let palindrome="malayalam"
let temp=palindrome.split("");
let reverse=""

for(i=temp.length-1;i>=0;i--){
    reverse=reverse+temp[i]
}
console.log(reverse)
if (palindrome==reverse){
    console.log(`Its a Palindrome`);
    
}else{
    console.log("Its not a palindrome")
}


//method 2
let palindrome2="malayalam"
let reverse2=""

for(i=palindrome2.length-1;i>=0;i--){
    reverse2=reverse2+palindrome2[i]
}
console.log(reverse2)

if (palindrome2==reverse2){
    console.log(`Its a Palindrome`);
    
}else{
    console.log("Its not a palindrome")
} 

//STRING ANAGRAM    
 let input = "Hello world "
lastword=input.split(" ")
console.log(`The last word is ${lastword[1]} with length ${lastword[1].length}`) */

let input2=" fly me to the moon "
lastword2=input2.trim()
lastword2=lastword2.split(" ")
console.log(lastword2)
console.log(`The last word is ${lastword2[4]} with length ${lastword2[4].length}`)

let anagram="listen"
let anagram2="silent"

a=anagram.split("").sort().join("")
b=anagram2.split("").sort().join("")

if (a==b){
    console.log("Its an anagram")
}else{
    console.log("Its not an anagram")
} 

 // ODD EVEN 
oddEven(5)

function oddEven(num){
    if(num%2==0){
        console.log("The given number is : Even")
    }else{
        console.log("The given number is : Odd")
    }
} 

// Positive / Negative / Zero

 Number(7)
function Number(i){
    if(i==0){
        console.log("neutral")
    }else if(i>0){
        console.log("Its a positive Number")
    }else{
        console.log("Its a negative number")
    }
}

//Conditional Statements 
launchBrowser("Chrome")
function launchBrowser(browserName){
    if(browserName=="Chrome"){
        console.log("Its chrome browser")
    }else{
        console.log("Its not Chrome browser")
    }
}

let runTests="smoke"
switch(runTests){
    case "regression testing":
        console.log("Its regression testing ")
        break;
    case "sanity":
        console.log("Its sanity testing")
        break;
    default:
        console.log("Its smoke testing")
} */
