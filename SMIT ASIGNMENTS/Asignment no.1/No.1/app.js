// // console.log("Hello, World!");
// // 1. Lowercase Name
// // Write a function that takes a name as input and returns it all in lowercase.
// // let nameInput = document.querySelector("#nameInput");
// // let btn = document.querySelector("#btn");

// // function lowercaseName() {
// //     if (nameInput.value !== "") {
// //         nameInput.value = nameInput.value.toLowerCase();
// //         console.log(nameInput.value);
// //     } else {
// //         alert("Please enter a name");
// //     }
// // }
// // btn.addEventListener("click", lowercaseName);

// // 2. Uppercase Shouting
// // Convert a given string into uppercase to simulate shouting. Example: "hello" →
// // "HELLO".
// // let nameInput = document.querySelector("#nameInput");
// // let btn = document.querySelector("#btn");

// // function lowercaseName() {
// //     if (nameInput.value !== "") {
// //         nameInput.value = nameInput.value.toUpperCase();
// //         console.log(nameInput.value);
// //     } else {
// //         alert("Please enter a name");
// //     }
// // }
// // btn.addEventListener("click", lowercaseName);
// // 3. Count Characters
// // Given a string, return the number of characters in it.
//     //     let number1= document.querySelector("#nameInput");
//     //     let btn = document.querySelector("#btn");
        
//     //     function lowercaseName(number) {
//     //     if(number1 !== ""){
//     //         console.log(number1.value.length)
//     //         let lengthDiv = document.querySelector(".lengthDiv");
//     //         lengthDiv.innerHTML= ""
//     //         let length1 = number1.value.length
            
//     //         lengthDiv.innerHTML += `<h3>The length of the entered word is = ${length1}</h3>`

//     //     }
            
//     //   }
// //   btn.addEventListener("click", lowercaseName);
//     // 4. First Character
// // Write a function that returns the first character of a string using charAt().
//    let name12 = document.querySelector("#number12")
//    let btn12 = document.querySelector("#btn")
//    function firstCharacter() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.charAt(0);
//         console.log(result);
//     } else {
//         alert("Enter something");
//     }
// }
// // 5. Last Character
// // Return the last character of any string using .charAt() and .length.
//   let name12 = document.querySelector("#number12")
//    let btn12 = document.querySelector("#btn")
// function lastCharacter() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.charAt(input.length - 1);
//         console.log(result);
//     } else {
//         alert("Enter something");
//     }
// }
// // 6. Find Position of Word
// // Given a sentence, find the position (index) of the word "apple" using indexOf.
//   let name12 = document.querySelector("#number12")
//    let btn12 = document.querySelector("#btn")
// function findApple() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.indexOf("apple");
//         console.log(result);
//     }
// }
// // / 7. Extract First Word
// // Use slice() and indexOf() to extract the first word from a sentence.
//   let name12 = document.querySelector("#number12")
//    let btn12 = document.querySelector("#btn")  
// function firstWord() {
//     let input = name12.value;

//     if (input !== "") {
//         let spaceIndex = input.indexOf(" ");
//         let result = input.slice(0, spaceIndex);
//         console.log(result);
//     }
// }
// // 8. Replace a Word
// // Replace the word "bad" with "good" in a given sentence using replace().
// function replaceWord() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.replace("bad", "good");
//         console.log(result);
//     }
// }
// // 9. Replace All Vowels
// // Replace all occurrences of vowels in a string with "*" using replaceAll().
// function replaceVowels() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.replaceAll("a", "*")
//                           .replaceAll("e", "*")
//                           .replaceAll("i", "*")
//                           .replaceAll("o", "*")
//                           .replaceAll("u", "*");
//         console.log(result);
//     }
// }
// // 10. Split Sentence into Words
// // Convert a sentence into an array of words using split(" ").
// function splitWords() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.split(" ");
//         console.log(result);
//     }
// }
// // 11. Capitalize First Letter
// // Capitalize only the first letter of a given word.
// function capitalize() {
//     let input = name12.value;

//     if (input !== "") {
//         let first = input.charAt(0).toUpperCase();
//         let rest = input.slice(1);
//         let result = first + rest;
//         console.log(result);
//     }
// }
// // 12. Find Second Word
// // Write a function that returns the second word of a sentence using split().
// function secondWord() {
//     let input = name12.value;

//     if (input !== "") {
//         let words = input.split(" ");
//         let result = words[1];
//         console.log(result);
//     }
// }

// // 13. Censor a Word
// // Replace all instances of a bad word like "dumb" in a string with "****".
// function censorWord() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.replaceAll("dumb", "****");
//         console.log(result);
//     }
// }
// // 14. Count Words in Sentence
// // Use .split() and .length to count how many words are in a sentence.
// function checkWord() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.indexOf("cat") !== -1;
//         console.log(result);
//     }
// }
// // 15. Check if Word Exists
// // Return true if a specific word (e.g., "cat") exists in a string using indexOf.
// function extractDomain() {
//     let input = name12.value;

//     if (input !== "") {
//         let index = input.indexOf("@");
//         let result = input.slice(index + 1);
//         console.log(result);
//     }
// }
// // 16. Extract Domain from Email
// // Given an email address, extract and return the domain name (everything after @).
// function extractDomain() {
//     let input = name12.value;

//     if (input !== "") {
//         let index = input.indexOf("@");
//         let result = input.slice(index + 1);
//         console.log(result);
//     }
// }
// // 17. Reverse Words in Sentence
// // Given a sentence, split it into words, reverse the array, and join it back into a string.
// function reverseSentence() {
//     let input = name12.value;

//     if (input !== "") {
//         let result = input.split(" ").reverse().join(" ");
//         console.log(result);
//     }
// }
// // 18. Check Palindrome (Basic)
// // Write a function that checks if a word is the same when reversed (ignore case).
// function checkPalindrome() {
//     let input = name12.value.toLowerCase();

//     let reversed = input.split("").reverse().join("");

//     if (input === reversed) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not Palindrome");
//     }
// }
// // 19. Count Vowels
// // Count how many vowels are in a given string using a loop and charAt.
// function countVowels() {
//     let input = name12.value;
//     let count = 0;

//     for (let i = 0; i < input.length; i++) {
//         let ch = input.charAt(i).toLowerCase();

//         if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//             count++;
//         }
//     }

//     console.log(count);
// }
// // 20. Alternate Case Converter
// // Convert a string to alternating case (e.g., "hello" → "HeLlO").
// // a.
// function alternateCase() {
//     let input = name12.value;
//     let result = "";

//     for (let i = 0; i < input.length; i++) {
//         if (i % 2 === 0) {
//             result += input[i].toUpperCase();
//         } else {
//             result += input[i].toLowerCase();
//         }
//     }

//     console.log(result);
// }
// // 21. Title Casing a Sentence
// // Convert a full sentence so that the first letter of each word is capitalized.
// function titleCase() {
//     let input = name12.value;
//     let words = input.split(" ");
//     let result = "";

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let newWord = word.charAt(0).toUpperCase() + word.slice(1);
//         result += newWord + " ";
//     }

//     console.log(result.trim());
// }
// // 22. Remove Duplicate Words
// // Given a sentence, remove any repeated words (case-insensitive).
// function removeDuplicates() {
//     let input = name12.value.toLowerCase();
//     let words = input.split(" ");
//     let result = [];

//     for (let i = 0; i < words.length; i++) {
//         if (result.indexOf(words[i]) === -1) {
//             result.push(words[i]);
//         }
//     }

//     console.log(result.join(" "));
// }
// // 23. Mask Email Address
// // Convert an email like john.doe@example.com to j***@example.com.
// function maskEmail() {
//     let input = name12.value;

//     let atIndex = input.indexOf("@");
//     let firstChar = input.charAt(0);
//     let domain = input.slice(atIndex);

//     let result = firstChar + "***" + domain;
//     console.log(result);
// }
// // 24. Find Most Frequent Word
// // Return the word that appears most frequently in a paragraph.
// function frequentWord() {
//     let input = name12.value;
//     let words = input.split(" ");
//     let maxCount = 0;
//     let mostWord = "";

//     for (let i = 0; i < words.length; i++) {
//         let count = 0;

//         for (let j = 0; j < words.length; j++) {
//             if (words[i] === words[j]) {
//                 count++;
//             }
//         }

//         if (count > maxCount) {
//             maxCount = count;
//             mostWord = words[i];
//         }
//     }

//     console.log(mostWord);
// }
// // 25. Abbreviate a Full Name
// // Given John Ronald Reuel Tolkien, return J.R.R.T. using split, charAt, and
// // toUpperCase.
// function abbreviate() {
//     let input = name12.value;
//     let words = input.split(" ");
//     let result = "";

//     for (let i = 0; i < words.length; i++) {
//         result += words[i].charAt(0).toUpperCase() + ".";
//     }

//     console.log(result);
// }
// // 26. Check if Anagram
// // Write a function that checks whether two strings are anagrams (same letters, different
// function checkAnagram() {
//     let str1 = prompt("Enter first word");
//     let str2 = prompt("Enter second word");

//     let a = str1.split("").sort().join("");
//     let b = str2.split("").sort().join("");

//     console.log(a === b);
// }
// // order).
// // 27. Find All Word Positions
// // Return all indices where a specific word occurs in a string (case-insensitive).
// function findPositions() {
//     let input = name12.value.toLowerCase();
//     let word = "cat";
//     let positions = [];

//     let index = input.indexOf(word);

//     while (index !== -1) {
//         positions.push(index);
//         index = input.indexOf(word, index + 1);
//     }

//     console.log(positions);
// }
// // 28. Reverse Each Word
// // Given a sentence, reverse each word individually but keep them in the same order.
// function reverseEachWord() {
//     let input = name12.value;
//     let words = input.split(" ");
//     let result = "";

//     for (let i = 0; i < words.length; i++) {
//         let rev = words[i].split("").reverse().join("");
//         result += rev + " ";
//     }

//     console.log(result.trim());
// }
// // 29. Smart Word Wrap
// // Break a sentence into lines of a given character limit, wrapping on spaces (not in the
// // middle of a word)
// // 
// function wordWrap() {
//     let input = name12.value;
//     let limit = 10;

//     let words = input.split(" ");
//     let line = "";

//     for (let i = 0; i < words.length; i++) {
//         if ((line + words[i]).length > limit) {
//             console.log(line);
//             line = "";
//         }
//         line += words[i] + " ";
//     }

//     console.log(line);
// }

// .
// // 30. Find Longest Word
// // Find and return the longest word in a sentence.
// function longestWord() {
//     let input = name12.value;
//     let words = input.split(" ");
//     let longest = "";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     console.log(longest);
// }