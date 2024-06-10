const axios = require("axios");

const BASE_URL = "http://localhost:5000"; // Adjust if needed

// Task 10: Get all books – Using async callback function
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  axios
    .get(`${BASE_URL}/isbn/${isbn}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Task 12: Search by Author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Task 13: Search by Title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${title}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Testing the methods
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("Things Fall Apart");
