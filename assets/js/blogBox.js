// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#tk-switch');
const container = document.querySelector('.container');
const blogContainer = document.querySelector('.blogContainer');
const card = document.querySelector('.card');
const title = document.querySelector('#blog-title');
const line = document.querySelector('#line');
const content = document.querySelector('#blog-content');
const author = document.querySelector('#blog-author');
const backButton = document.querySelector('#back-button');
const developersPortFolioButton = document.querySelector('#developers-portfolio-button');
// const blogTitle = document.querySelector('#blog-title');
// const blogContent = document.querySelector('#blog-content');
// const blogAuthor = document.querySelector('#blog-author');
const row = document.querySelector('.row');
const blogTitleSpan = document.querySelector('#blog-title');
const blogContentSpan = document.querySelector('#blog-content');
const blogAuthorSpan = document.querySelector('#blog-author');

// const storedBlog = JSON.parse(localStorage.getItem('blogData'));

// Attach event listener to Back button element
backButton.addEventListener('click', function () {
  // window.open('http://127.0.0.1:5500/index.html');
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
    blogContainer.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    blogContainer.setAttribute('class', 'dark');
  }
});



// alert('chk');
// let blogDataArray = [{title:'1', content:'2', userName:'TK' }];

// alert('chk0');
// alert('blogDataArray title = ' + blogDataArray[0].title);
// const fetchedBlogDataArray = localStorage.getItem(blogDataArray);
const fetchedBlogDataArray = JSON.parse(localStorage.getItem('blogDataArray'));
// alert('fetchedBlogDataArray.first title = ' + fetchedBlogDataArray[1].title);

const displayBlogs = function (fetchedBlogDataArray) {
  // const blogDataArray = JSON.parse(localStorage.getItem(storedBlogDataArray));
  // const currentBlog = blogDataArray[0];
  // alert('chk1');
  for (i=0; i<fetchedBlogDataArray.length; i++) {
      const currentBlog = fetchedBlogDataArray[i];
      // alert('fetchedBlogDataArray.['+i+'].title = ' + fetchedBlogDataArray[i].title);
      const card = document.createElement('card');
      // const title = document.createElement('blog-title');
      // // const line = document.createElement('line');
      // const content = document.createElement('blog-content');
      // const userName = document.createElement('blog-author');
      card.classList.add('card');
      card.innerHTML = `
        <p><h3>Title: ${currentBlog.title}</h3></p>
        <hr> 
        <p>Content: ${currentBlog.content}</p>
        <br> <br>
        <p><h3>Author: ${currentBlog.userName}<h3></p>
      `;
      document.getElementById('blogCard').appendChild(card);
}
}

      // document.body.appendChild(title);
      // document.body.appendChild(line);
      // document.body.appendChild(content);
      // document.body.appendChild(author);
      // alert('card 2 = ' + card.classList);
      // alert('chk2');
/* <p>Title: **** ${currentBlog.title}</p>
<p>Content: ${currentBlog.content}</p>
<p>Author: ${currentBlog.userName}</p> */

// .catch(error => {
//   console.error('Error fetching data:', error);
// });


developersPortFolioButton.addEventListener('click', function (event) {
  window.open('https://twkim6440.github.io/challenge-2/index.html');
})

displayBlogs(fetchedBlogDataArray);



// const displayBlogs = function (storedBlogDataArray) {
//   // const blogDataArray = JSON.parse(localStorage.getItem(storedBlogDataArray));
//   // const currentBlog = blogDataArray[0];
//   alert('chk1');
// fetch('localStorage://blogDataArray')
//   .then(response => response.json())
//   .then(data => {
//   const fetchedBlogDataArray = JSON.parse(localStorage.getItem(blogDataArray));
//   const currentBlog = fetchedBlogDataArray[0];
//   const box = document.createElement('card');
//   box.classList.add('card');
//   box.innerHTML = `
//     <p>Title: ${currentBlog.title}</p>
//     <p>Content: ${currentBlog.content}</p>
//     <p>Author: ${currentBlog.userName}</p>
//   `;
//   document.body.appendChild(box);
// })
// .catch(error => {
//   console.error('Error fetching data:', error);
// });
// }


// const displayBlogs = function (storedBlogDataArray) {
//   // for (i=0; i<storedBlogDataArray.length; i++) {
//     const blogDataArray = JSON.parse(localStorage.getItem(storedBlogDataArray));
//     const currentBlog = blogDataArray[0];
//     blogTitleSpan.textContent = currentBlog.text
//     blogContentSpan.textContent = currentBlog.text
//     blogAuthorSpan.textContent = currentBlog.text
//     // blogTitle.textContent = email;
//     // blogContent.textContent = password;
//     // blogAuthor.textContent = password;
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

// }



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

    // const container = document.getElementById('container');
// alert('container = ' + container);
//   for (const key in currentBlog) {
//     if (Object.hasOwnProperty.call(currentBlog, key)) {
//       const propertyBox = document.createElement('div');
//       propertyBox.textContent = `${key}: ${user[key]}`;
//       alert('propertyBox.textContent = ' + propertyBox.textContent)
//       container.appendChild(propertyBox);
//     }
//   }


// const container = document.getElementById('container');
// const tmpString = JSON.stringify(currentBlog);
//   // alert('tmpString = ' + tmpString);
//   // var newBox = document.createElement("div");
//   // newBox.blogTitle = currentBlog.title;
//   // newBox.blogContent = currentBlog.content;
//   // newBox.blogAuthor = currentBlog.userName;
// // const propertyBox = document.createElement('div');
// // alert('chk1');
//   let blogTitle = currentBlog.title;
//   // alert('blogTitle  = '+ blogTitle);
//   let  blogContent = currentBlog.content;
//   let  blogAuthor = currentBlog.userName;
//   // for (const key in currentBlog) {
//   //   alert('key  = '+ key);
//   //   if (Object.hasOwnProperty.call(currentBlog, key)) {
//   //     const propertyBox = document.createElement('div');
//   //     propertyBox.textContent = `${key}: ${currentBlog[key]}`;
//   //     alert('propertyBox.textContent = ' + propertyBox.textContent)
//   //     container.appendChild(propertyBox);
//   //   }
//   // }
//   const propertyBox = document.createElement('currentBlog');
//   propertyBox.title = 'Output Title: ' + blogTitle;
//   // propertyBox.textContent = `${key}: ${currentBlog[key]}`;
//   alert('propertyBox.textContent 1 = ' + propertyBox.title)
//   container.appendChild(propertyBox);
// alert('chk2');
// propertyBox.content = 'Output Content: ' + blogContent;
// alert('propertyBox.textContent 2 = ' + propertyBox.content)
// container.appendChild(propertyBox);
//   alert('chk3');
