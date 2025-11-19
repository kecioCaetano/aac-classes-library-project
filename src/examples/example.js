// // Wait for the DOM to be fully loaded before running the script
// document.addEventListener("DOMContentLoaded", () => {

//     // 1. The data object
//     const libraryData = {
//         books: [
//             { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
//             { title: "1984", author: "George Orwell", year: 1949 },
//             { title: "Dune", author: "Frank Herbert", year: 1965 }
//         ]
//     };

//     // 2. Get the template from the DOM
//     const template = document.getElementById('bookTemplate').innerHTML;

//     // 3. Get the container where the output will be placed
//     const outputContainer = document.getElementById('book-container');

//     // 4. Render the template with the data
//     const renderedHtml = Mustache.render(template, libraryData);

//     // 5. Insert the rendered HTML into the container
//     outputContainer.innerHTML = renderedHtml;
// });