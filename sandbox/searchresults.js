document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("results");

    // Replace this with your actual project data
    const projectData = [
        {
            title: "Recent Project 1",
            description: "This is the description for Recent Project 1.",
            // Add more properties as needed
        },
        {
            title: "Recent Project 2",
            description: "This is the description for Recent Project 2.",
            // Add more properties as needed
        },
        {
            title: "Recent Project 3",
            description: "This is the description for Recent Project 3.",
            // Add more properties as needed
        },
        // Add more project objects as needed
    ];

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Perform the search and display results
        const searchResults = projectData.filter(project => {
            return project.title.toLowerCase().includes(searchTerm) ||
                   project.description.toLowerCase().includes(searchTerm);
            // Add additional fields to search here if needed
        });

        resultsContainer.innerHTML = ""; // Clear previous results

        if (searchResults.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        } else {
            searchResults.forEach(project => {
                const resultItem = document.createElement("div");
                resultItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <hr>
                `;
                resultsContainer.appendChild(resultItem);
            });
        }
    });
});
