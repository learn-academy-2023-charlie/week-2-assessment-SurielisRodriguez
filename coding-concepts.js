// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: The array will be split using "", each letter will be in its own ""
// b) Verify and explain: The output was each character split up into its own quotations and the output was in the form of an array using bracket notation.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I think this will return underfined since the var/const was not defined in the code
// b) Verify and explain: The terminal logged undefined as the output since we never gave the element a value.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: This will multiply the given array by two.
// b) Verify and explain: This returned the array multiplied by two and then we call the function so that it displays the new multiplied values.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This function should filter out all the even numbers out of the array.
// b) Verify and explain: This function returns all the odd values by examining the given values and if the number is divisible by two we are telling it not to display those values by using !==

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: I believe this will display the value at the first index of 0 under languages which is Javascript.
// b) Verify and explain: This displays Javascript because we are assigning two values to languages and we made a reference to pull languages and told it to display the value at the 0 index using bracket notation. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: THis will assign the name "george" to the student. I dont think will log correctly though due to the fact that we are referencing something that was not defined
// b) Verify and explain: This returns an output of Learn { student: 'George', cohort: 'Charlie', year: 2023 } 
