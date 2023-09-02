// Get the query parameter from the URL
const queryParams = new URLSearchParams(window.location.search);
const searchTerm = queryParams.get('query');

// Assuming you have an input element with an id of "searchInput"
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const newSearchTerm = searchInput.value.trim().toLowerCase();

  // Get the current page URL
  const currentPage = window.location.pathname;

  if (currentPage === '/search-results.html') {
    // If the current page is the search results page, perform filtering or any other actions
    filterResults(newSearchTerm);
  } else {
    // Redirect to the search results page with the new search term as a query parameter
    window.location.href = `search-results.html?query=${encodeURIComponent(newSearchTerm)}`;
  }
}

// Get references to the gallery items
const galleryItems = document.querySelectorAll('.gallery-img');

// Assuming you have an element with an id of "clearButton"
const clearButton = document.getElementById("clearButton");

// Add event listener for the clear button
clearButton.addEventListener("click", function() {
  // Clear the search input
  searchInput.value = "";

  // Show all gallery items (reset the search)
  galleryItems.forEach((item) => {
    item.style.display = 'block';
  });
});

// Function to filter results on the search results page
function filterResults(searchTerm) {
  // Your logic for filtering and displaying results here
  galleryItems.forEach((item) => {
    const itemName = item.querySelector('.projectname').textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
