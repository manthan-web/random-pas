const copyBtn = document.querySelector('.copy-btn')
const inputElement = document.querySelector('#myInput')
const genPassBtn = document.querySelector('.gen-pass')

let arr1 = ['@','#','!','$','%','&',"*"]
let arr2 = Array.from('ABCDEFGHIJKLMNOPQURST')
let arr3 = Array.from('abcdefghijklmnopqurst').reverse()
let arr4 = ['@','#','!','$','%','&',"*"].reverse()
let arr5 = Array.from('/*-+.><()]\'=:')
console.log(arr5)


genPassBtn.addEventListener('click', genRandomPass)
copyBtn.addEventListener('click', myFunction)


function myFunction () {
    inputElement.select()
    inputElement.setSelectionRange(0, 99999);
    
    // copy text from text field
    navigator.clipboard.writeText(inputElement.value);
}

let firstLetter;
let secondLetter;
let thirdLetter;
let fourthLetter;
let fifthLetter;

function genRandomPass () {
    let index =  Math.floor(Math.random() * arr1.length)
    let index2 =  Math.floor(Math.random() * arr1.length)
    // console.log(index2)
    firstLetter = arr1[index]
    secondLetter = arr2[index2]
    thirdLetter = arr3[index]
    fourthLetter = arr4[index2]
    fifthLetter = arr5[index]






    // console.log(inputElement.value)


    let mainPass = firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter + thirdLetter
    inputElement.value = mainPass
}

