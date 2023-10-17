


// Double Using Callback:

function doubleUsingCallback(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== 'function') {
    return "Invalid input.";
  }

  const doubledArray = arr.map(callback);
  return doubledArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const double = (num) => num * 2;

const doubledNumbers = doubleUsingCallback(numbers, double);
console.log(doubledNumbers);







// String Manipulation:

function manipulateString(str) {
  const upperStr = str.toUpperCase();

  function logString() {
    console.log(`The manipulated string is: ${upperStr}`);
  }

  return logString;
}

const logCallback = manipulateString("Hello, World!");
logCallback();





// Age in Days:
function ageInDays(person) {
  const { firstName, lastName, ageInYears } = person;
  const fullName = `${firstName} ${lastName}`;
  const ageInDays = ageInYears * 365;

  return function () {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  };
}

const personInfo = {
  firstName: "John",
  lastName: "Doe",
  ageInYears: 30,
};

const logAge = ageInDays(personInfo);
logAge();





// Arrange in Alphabetical Order:

function arrangeBooksAlphabetically(books, callback) {
  const bookTitles = books.map((book) => book.title);
  const sortedTitles = bookTitles.sort();
  callback(sortedTitles);
}

const books = [
  { title: "B Book", author: "Author B", year: 2022 },
  { title: "A Book", author: "Author A", year: 2020 },
  { title: "C Book", author: "Author C", year: 2021 },
];

function logSortedTitles(titles) {
  console.log("Sorted book titles:", titles);
}

arrangeBooksAlphabetically(books, logSortedTitles);




// Greeting Promise:

function greetWithPromise(name) {
  return new Promise((resolve) => {
    resolve(`Hello, ${name}!`);
  });
}

greetWithPromise("Mithun")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));





// Fetch Results Asynchronously:


async function fetchDataFromAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataFromAPI();



// Multiple Requests:

async function fetchCombinedDataFromAPIs() {
  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);

    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };

    console.log(combinedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchCombinedDataFromAPIs();




// Get Data from API and Display in Browser Console:

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));




// Error Handling with Fetch:

fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
