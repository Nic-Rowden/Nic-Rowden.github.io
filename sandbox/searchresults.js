// Get the query parameter from the URL
const queryParams = new URLSearchParams(window.location.search);
const searchTerm = queryParams.get('query');

// Get references to the gallery items
const galleryItems = document.querySelectorAll('.gallery-img');

// Loop through each gallery item and hide/show based on search term
galleryItems.forEach((item) => {
    const itemName = item.querySelector('.projectname').textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});

// Assuming you have an input element with an id of "searchInput"
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const newSearchTerm = searchInput.value.trim().toLowerCase();
  
  // Redirect to the search results page with the new search term as a query parameter
  window.location.href = `search-results.html?query=${encodeURIComponent(newSearchTerm)}`;
}
