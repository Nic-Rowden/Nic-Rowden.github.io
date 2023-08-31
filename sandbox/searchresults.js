// Get references to the elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const galleryImages = document.querySelectorAll('.gallery-img');

// Attach event listener to the form submission
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Loop through each gallery image and hide/show based on search term
    galleryImages.forEach((image) => {
        const imageName = image.querySelector('.projectname').textContent.toLowerCase();
        if (imageName.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});
