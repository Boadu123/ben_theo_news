// for loop
// let fruits = ["mango", "banana", "orange", "apple"];
// console.log(fruits[0]);

// for (let fruit = 0; fruit < fruits.length; fruit++) {
//   console.log(fruits[fruit]);
// }

//map

// let acts = ["read", "walk", "move", "intreract"];

// let newAct = acts.map(function (act) {
//   console.log(act.toUpperCase());
// });

// for in

// let foods = ["banku", "rice", "beans", "fufu"];

// for (let food in foods) {
//   console.log(food);
// }

// for each

// let names = ["Joel", "Benedict", "Benedicta", "Adwoa"];

// names.forEach((name) => console.log(name));

//for of
// let items = ["books", "pencils", "pens", "eraser"];

// for (let item of items) {
//   console.log(item);
// }

// let n = 0;
// while (n > 0) {
//   console.log("Benedict");
// }

let searchInput = document.querySelector("#search-input");
//button

let searchButton = document.querySelector("#search-button");

let articles;
let searchTerm;

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  searchTerm = searchInput.value;

  articles = await fetcData(searchTerm);
  console.log(articles);

  document.querySelector("#articles").replaceChildren();
  main();
});

const fetcData = async (query) => {
  let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=8b7d356714c7490e86541c70ec97e6f9&pageSize=15`;

  if (query) {
    // url = url + `&q=${query}`;
    url += `&q=${query}`;
  }

  const response = await fetch(url);

  const data = await response.json();

  return data.articles;
};

//starting point
const main = async () => {
  if (searchTerm == undefined) {
    articles = await fetcData();
  }

  console.log(articles);

  for (const article of articles) {
    // console.log(article)
    const articleDiv = document.createElement("div");
    const articleH1 = document.createElement("h2");

    articleH1.textContent = article.title;
    articleDiv.appendChild(articleH1);

    const articleP = document.createElement("p");
    articleP.textContent = article.content;
    articleDiv.appendChild(articleP);

    const articleImg = document.createElement("img");
    articleImg.setAttribute("src", article.urlToImage);
    articleImg.setAttribute("alt", article.title);
    articleImg.classList.add("articles-img");
    articleDiv.appendChild(articleImg);

    document.querySelector("#articles").appendChild(articleDiv);
  }
};

main();
// console.table(data.articles);
