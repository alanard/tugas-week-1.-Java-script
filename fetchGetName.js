const getName = (linkurl) => {
  fetch(linkurl)
    .then((result) => result.json())
    .then((data) => console.log(data.map((item) => item.name)))
    .catch((err) => console.log(err));
};

getName("https://jsonplaceholder.typicode.com/users");
