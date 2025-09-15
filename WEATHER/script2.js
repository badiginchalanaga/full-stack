// Simple array of books
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 18.99 },
  { title: "1984", author: "George Orwell", price: 15.50 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.75 }
];

// Get table by ID
console.log("book title:",books.map(b=>b.title));




console.log("=== Hour 2: AJAX with Fetch ===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data =>console.log("Fetched data:",data))
.catch(error =>console.error("Error:",error));



console.log("=== Hour 2: AJAX with Fetch ===");
fetch("https://jsonplaceholder.typicode.com/posts")  
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Error:", error));





  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        let output="<h3>user List</h3><ul>";
        users.forEach(user=>{
            output+=`<li>${user.name} - ${user.email}</li>`;
        });
        output += `</ul`;
        document.body.innerHTML += output;
    });
        



    

    console.log("===weather info fetcher project===");