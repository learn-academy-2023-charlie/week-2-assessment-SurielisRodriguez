// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
//input: object
//output: whether number is divisible by 3
// process: using the module operator we can use a conditional saying that if the number is divisible by three then we want it to display that to the URLSearchParams. With our else statement we can tell it to catch the rest of the numbers and give a different output. 

// a) Create a test with expect statements for each of the variables provided.
descibe("testing whether number is divisible by three",()=>{
    it("returns whether number is divisible by three",() =>{
        expect(divisibleBy(object1).toEqual("15 is divisible by three"))
        expect(divisibleBy(object2).toEqual("0 is divisible by three"))
        expect(divisibleBy(object3).toEqual("-7 is not divisible by three"))
    })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const divisibleBy = (object) => {
    if (object % 3 === 0 ) {
        return `${object.number} is divisible by three.`
    }else {
        return `${object.number} is not divisible by 3`
    }
}
console.log (divisibleBy(object1));
console.log (divisibleBy(object2));
console.log (divisibleBy(object3));

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
//input: string
//output: modified string
//process: using a fucntion we can tell this program to take the string as an inout and return it with a capitalized letter. using .map to iterate through array. Then using the charAt we can tell the program to look at a specified value, then apply .toUpperCase to capitalize, and using .slice and telling it where to slice and stop the uppercasing process.
// a) Create a test with expect statements for each of the variables provided.


describe("returns array with the words capitalized", () => {
    it("returns array with words capitalized", () => {
    expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
    expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]);
})
})


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const allCaps = (array) => {
    return array.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    })
}
console.log(allCaps(randomNouns1))
console.log(allCaps(randomNouns2))
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code: 
// Input: String
// Output: index of first vowel in String
// Process: using a for loop we tell the program to examine our string starting from the zero index and going up. Then using a conditional and .includes we tell it to check for vowels in our string and tell it to return the index if found.

// a) Create a test with expect statements for each of the variables provided.


describe('indexVowel function', () => {
    it('should return the index of the first vowel in a string', () => {
      expect(indexVowel("learn")).toBe(1);
      expect(indexVowel("academy")).toBe(0);
      expect(indexVowel("challenges")).toBe(2);
    });
  });
  

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
const threeStrings = vowelTester1 + vowelTester2 + vowelTester3

// b) Create the function that makes the test pass.
const indexVowel = (element) => {
    for (let i = 0; i < element.length; i++) {
      if ("aeiou".includes(element[i])) {
        return i;
      }
    }
  }
  
console.log(indexVowel(vowelTester1));
console.log(indexVowel(vowelTester2));
console.log(indexVowel(vowelTester3));
