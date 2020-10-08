//javascript code to check if the string is palindrome or not- "Cerner_2^5_2020"

function checkPalindrome(str) {
    let arrayValues = string.split('');
    let reverseArrayValues = arrayValues.reverse();
    let reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
let string = "Cerner_2^5_2020";
checkPalindrome(string);
