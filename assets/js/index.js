const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

const bookList = document.querySelector(".book-list");

books.sort((a, b) =>
  new Intl.Collator().compare(a.author.split(" ")[1], b.author.split(" ")[1])
);

for (let i = 0; i < books.length; i++) {
  const li = document.createElement("li");
  li.classList.add("card");
  li.style.width = "18rem";

  const image = document.createElement("img");
  image.src = books[i].img;
  image.classList.add(
    "card-img-top",
    "img-fluid",
    "border",
    "border-dark",
    "border-3"
  );
  image.style.width = "100%";
  image.style.height = "400px"

  const div = document.createElement("div");
  div.classList.add("card-body");

  const headTwo = document.createElement("h2");
  headTwo.innerText = books[i].title;
  headTwo.classList.add("card-title", "h5", "fw-normal");

  const author = document.createElement("span");
  author.innerText = books[i].author.split(" ").reverse().join(", ");
  author.classList.add("card-text", "fs-5", "fw-light");

  div.append(headTwo, author);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add(
    "d-grid",
    "gap-2",
    "d-md-flex",
    "justify-content-md-end"
  );
  btnDiv.style.height = "5rem";
  btnDiv.style.border = "2px solid gray";

  const button = document.createElement("button");
  button.textContent = books[i].alreadyRead ? "read" : "unread";
  button.classList.add("btn", books[i].alreadyRead ? "btn-success" : "btn-secondary");
  button.style.height = "2rem";
  button.style.margin = "auto 0";
  button.style.marginRight = "1rem"
  button.style.borderRadius = "47%";
  button.style.textAlign="centre"

  button.addEventListener("click", (evt) => {
    if (!books[i].alreadyRead) {
      books[i].alreadyRead = true;
      button.textContent = "read";
      button.classList.add("btn-success");
      button.classList.remove("btn-secondary");
    }
  });

  btnDiv.append(button);
  li.append(image, div, btnDiv);

  bookList.append(li);
}


