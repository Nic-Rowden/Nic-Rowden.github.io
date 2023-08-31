// Get references to the elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Attach event listener to the form submission
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm !== '') {
        // Redirect to the results page with the search term as a query parameter
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    }
});
// Get reference to the results container
const resultsContainer = document.getElementById('resultsContainer');

// Get the search term from the URL query parameter
const queryParams = new URLSearchParams(window.location.search);
const searchTerm = queryParams.get('query');

if (searchTerm) {
    // Perform your search logic here and populate the resultsContainer
    // For demonstration purposes, let's just display the search term
    resultsContainer.textContent = `Search results for: ${searchTerm}`;
} else {
    resultsContainer.textContent = "No search term provided.";
}
