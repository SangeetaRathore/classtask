// 1.
function capitalizeFirstLetterOfEachWord(sentence) {
         const words = sentence.split(' ');
         const capitalizedWords = [];
     
         for (let i = 0; i < words.length; i++) {
             let firstLetter = words[i][0].toUpperCase();
             let restLetters = words[i].slice(1);
             let newWord = firstLetter + restLetters;
             capitalizedWords.push(newWord);
         }
         const capitalizedSentence = capitalizedWords.join(' ');
     
         return capitalizedSentence;
     }
const input = "this is javascript";
const output = capitalizeFirstLetterOfEachWord(input);
// console.log(output)



// 2. 
let myArray = ["javascript", "react", "node"] 
let myArray2 = []

for (let i=0;i<myArray.length;i++){
         let Newword = myArray[i].toLowerCase()
         if (Newword==="javascript")
                  myArray2.push(true)
         else{
                  myArray2.push(false)
         }
                 
}   
// console.log(myArray2);




// 4
function checkA(inp1,inp2){
         let inpu1 = inp1.toLowerCase();
         let inpu2 = inp2.toLowerCase();
         if (inpu1.length!=inpu2.length){
                  return (false)
         }
         const input1 = inpu1.split('').sort().join('');
         const input2 = inpu2.split('').sort().join('');
         return input1 === input2;
}

let firstWord = "night"
let secondWord = "thing"
// console.log(checkA(firstWord,secondWord));



// 5
function reverseLetterOfSentence(sentence) {
         let reversedSentence = sentence.split('').reverse().join('');
         return reversedSentence;
     }
     
let mySentence1 = "i am learning javascript";
console.log(reverseLetterOfSentence(mySentence1)); 




// 6
function reverseSentence(sentence) {
         let newSentence = sentence.split(' ').reverse().join(' ');
         return newSentence;
     }
     
let mySentence = "Success comes to those who work hard";
console.log(reverseSentence(mySentence));

     