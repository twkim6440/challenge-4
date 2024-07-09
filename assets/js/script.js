// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#tk-switch');
const container = document.querySelector('.container');
const blogContainer = document.querySelector('.blogContainer');
const msgDiv = document.querySelector('#msg');

const submitTableButton = document.querySelector('#submit-table-button');
const submitBoxButton = document.querySelector('#submit-box-button');
const clearLocalStorageButton = document.querySelector('#clear-local-storage-button');

const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');
const blogUserName = document.querySelector('#userName');

const row = document.querySelector('.row');

// const blogData = {title:'', content:'', userName:''};
// const blogDataArray = [];
// localStorage.setItem('blogDataArray',JSON.stringify(blogDataArray));

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

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
};

// I couldn't find the proper solution for displaying blog information with a box,
// so, I tried to display it using a table format.
submitTableButton.addEventListener('click', function (event) {
    event.preventDefault();
    const title = blogTitle.value;
    const content = blogContent.value;
    const userName = blogUserName.value;
    if (title === '') {
        displayMessage('error', '"Title" cannot be blank.  Please, enter valid title.');
    } else if (content === '') {
        displayMessage('error', '"Content" cannot be blank.  Please, enter valid content.');
    } else if (userName === '') {
        displayMessage('error', '"Name" cannot be blank.  Please, enter valid name.');
    } else {
        displayMessage('Input Completed...!', 'Registered successfully');
    tmpBlogData = {title: title, content: content, userName: userName};
    const existingArray = JSON.parse(localStorage.getItem('blogDataArray')) || [];
    existingArray.push(tmpBlogData);
    const stringifiedBlogDataArray = JSON.stringify(existingArray);
    localStorage.setItem('blogDataArray',stringifiedBlogDataArray);
    window.open('./blog.html');
    }
});
// I tried to display blog information with a box with 'blogBox.html, but not quite done, yet. 
submitBoxButton.addEventListener('click', function (event) {
    event.preventDefault();
    const title = blogTitle.value;
    const content = blogContent.value;
    const userName = blogUserName.value;
    if (title === '') {
        displayMessage('error', '"Title" cannot be blank.  Please, enter valid title.');
    } else if (content === '') {
        displayMessage('error', '"Content" cannot be blank.  Please, enter valid content.');
    } else if (userName === '') {
        displayMessage('error', '"Name" cannot be blank.  Please, enter valid name.');
    } else {
        displayMessage('Input Completed...!', 'Registered successfully');
    tmpBlogData = {title: title, content: content, userName: userName};
    const existingArray = JSON.parse(localStorage.getItem('blogDataArray')) || [];
    existingArray.push(tmpBlogData);
    const stringifiedBlogDataArray = JSON.stringify(existingArray);
    localStorage.setItem('blogDataArray',stringifiedBlogDataArray);
    window.open('./blogBox.html');
    }
});

clearLocalStorageButton.addEventListener('click', function (event) {
    localStorage.clear();
    window.open('./index.html');
});
    






// const posts = blogDataArray;
// document.addEventListener("DOMContentLoaded"), () => {
//   alert('chk2 : Inside DOM - posts = ');
//   const postsContainer = document.getElementById("posts");
//   alert('chk3 : Inside DOM - posts = ');

//   const displayBlogs = () => {
//       const blogData = JSON.parse(localStorage.getItem("blogDataArray")) || [];
//       alert('chk4 : post = ');
//       postsContainer.innerHTML = "";
//       posts.forEach((posts) => {
//         // alert('chks: blogDataArray =  ' + blogDataArray);
//         const postEL = document.createElement("div");
//         postEl.classList.add("post-container"); 
//         postEL.innerHTML = `
//             <h2>${blogDataArray.title}</h2>
//             <li>${blogDataArray.content}</li>
//             <p><strong>Author:</strong> ${blogDataArray.author}</p>
//         `; 
//       });
//   };
//   alert('chk5 : post = ');
//   if (postsContainer) {
//     alert('chk6 : post = ');
//     displayBlogs();
//   }
// }

// // Display Blog data in Boxes, vertically
// const displayBlogs = function (storedBlogDataArray) {
//   // Create a box which contains Title, Content and Author's name
//   // alert('chk1');

//   for (i=0; i<storedBlogDataArray.length; i++) {
//       const currentBlog = storedBlogDataArray[i];
//       const userString = JSON.stringify(currentBlog);

//       for (const key in currentBlog) {
//         const container = document.getElementById('container');

//         // alert('key = ' + key);
//           if (currentBlog.hasOwnProperty(key)) {
//               const row = document.createElement('div');
//               row.classList.add('row');

//               const property = document.createElement('span');
//               property.classList.add('property');
//               property.textContent = key + ':   ';

//               const value = document.createElement('span');
//               value.classList.add('value');
//               value.textContent = currentBlog[key];

//               row.appendChild(property);
//               row.appendChild(value);

//               container.appendChild(row);
//           }
//       }
//     }
//     // const container = document.getElementById('container');
// // alert('container = ' + container);
// //   for (const key in currentBlog) {
// //     if (Object.hasOwnProperty.call(currentBlog, key)) {
// //       const propertyBox = document.createElement('div');
// //       propertyBox.textContent = `${key}: ${user[key]}`;
// //       alert('propertyBox.textContent = ' + propertyBox.textContent)
// //       container.appendChild(propertyBox);
// //     }
// //   }


// // const container = document.getElementById('container');
// // const tmpString = JSON.stringify(currentBlog);
// //   // alert('tmpString = ' + tmpString);
// //   // var newBox = document.createElement("div");
// //   // newBox.blogTitle = currentBlog.title;
// //   // newBox.blogContent = currentBlog.content;
// //   // newBox.blogAuthor = currentBlog.userName;
// // // const propertyBox = document.createElement('div');
// // // alert('chk1');
// //   let blogTitle = currentBlog.title;
// //   // alert('blogTitle  = '+ blogTitle);
// //   let  blogContent = currentBlog.content;
// //   let  blogAuthor = currentBlog.userName;
// //   // for (const key in currentBlog) {
// //   //   alert('key  = '+ key);
// //   //   if (Object.hasOwnProperty.call(currentBlog, key)) {
// //   //     const propertyBox = document.createElement('div');
// //   //     propertyBox.textContent = `${key}: ${currentBlog[key]}`;
// //   //     alert('propertyBox.textContent = ' + propertyBox.textContent)
// //   //     container.appendChild(propertyBox);
// //   //   }
// //   // }
// //   const propertyBox = document.createElement('currentBlog');
// //   propertyBox.title = 'Output Title: ' + blogTitle;
// //   // propertyBox.textContent = `${key}: ${currentBlog[key]}`;
// //   alert('propertyBox.textContent 1 = ' + propertyBox.title)
// //   container.appendChild(propertyBox);
// // alert('chk2');
// // propertyBox.content = 'Output Content: ' + blogContent;
// // alert('propertyBox.textContent 2 = ' + propertyBox.content)
// // container.appendChild(propertyBox);
// //   alert('chk3');

// }

