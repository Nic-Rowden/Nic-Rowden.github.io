// Get references to the elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const galleryItems = document.querySelectorAll('.gallery-img');

// Attach event listener to the form submission
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    performSearch();
});

// Attach event listener to the Enter key press in the search input
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Loop through each gallery item and hide/show based on search term
    galleryItems.forEach((item) => {
        const itemName = item.querySelector('.projectname').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
