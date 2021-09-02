// javascript cod start
document.getElementById("error-message").style.display = "none";
const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // clear data error massage
  searchField.value = "";
  document.getElementById("error-message").style.display = "none";
  // error section
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.docs, data.numFound))
    .catch((error) => displayError(error));
};

const displayError = (error) => {
  document.getElementById("error-message").style.display = "block";
};
// book result part
const displaySearchResult = (docs, numFound) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  docs.forEach((doc) => {
    // console.log(doc);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <h4>Result Found: ${numFound}</h4>
    <div onclick="loadMealDetail(${doc.cover_i})" class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${doc.title}</h5>
            <p class="card-text">${doc.author_name}</p>
            <p class="card-text">${doc.first_publish_year}</p>
        </div>
    </div>
    `;
    searchResult.appendChild(div);
  });
};

// code end
