// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#tk-switch');
const container = document.querySelector('.container');
const backButton = document.querySelector('#back-button');
const developersPortFolioButton = document.querySelector('#developers-portfolio-button');
const storedBlog = JSON.parse(localStorage.getItem('blogData'));

developersPortFolioButton.addEventListener('click', function (event) {
  window.open('https://twkim6440.github.io/challenge-2/index.html');
})

// Attach event listener to Back button element
backButton.addEventListener('click', function () {
  window.open('./index.html');
});

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
const storedBlogDataArray = JSON.parse(localStorage.getItem('blogDataArray'));
// Display Blog data in an HTML table
const displayBlogs = function (storedBlogDataArray) {
  // Get the Blog table
  const blogTable = document.querySelector("#blog-table");
  // alert('chk2');

  // Clear the employee table
  blogTable.innerHTML = "";
  // Loop through the Blog array data and create a row for each blog
  // alert('length = ' + storedBlogDataArray.length)
  for (let i = 0; i < storedBlogDataArray.length; i++) {
    // for (let i = 0; i < storedBlogDataArray.length; i++) {
      // alert('chk4 i =' + i);
    const currentBlog = storedBlogDataArray[i];
    const newTableRow = document.createElement("tr");
    // alert('chk5');
    const userNameCell = document.createElement("td");
    userNameCell.textContent = currentBlog.userName;
    newTableRow.append(userNameCell);
    // alert('chk6');
    const titleCell = document.createElement("td");
    titleCell.textContent = currentBlog.title;
    newTableRow.append(titleCell);
    // alert('chk7');
    const contentCell = document.createElement("td");
    contentCell.textContent = currentBlog.content;
    newTableRow.append(contentCell);
    // alert('chk8');
    blogTable.append(newTableRow);
    };
    // alert('chk7');
  }

  // alert('chk1');
  displayBlogs(storedBlogDataArray);
