// Sample JSON data for the cheat sheet with header, notes, and description
const mynotes = [
  {
    header: "Insert data in sql database",
    notes:
      '<h4>Insert input -> mysql</h4><code><a href="https://github.com/AATHILDUCKY/aathil-ducky-webdevelopment-resources/blob/main/insert_input_data_in_mysql_database_php.txt">Source Code -> <b>Link here</b></a><br><br></code>',
    description: "insert , data , mysql, input, users data, sql",
  },
  {
    header: "Search data in SQL (GUI)",
    notes:
      '<h4>Insert input -> mysql</h4><code><a href="https://github.com/AATHILDUCKY/aathil-ducky-webdevelopment-resources/blob/main/search_data_in_mysql_database_php.txt">Source Code -> <b>Link here</b></a><br><br></code>',
    description: "search , data , mysql, find, users data, sql",
  },
  {
    header: "Insert data in sql database",
    notes:
      '<h4>Insert input -> mysql</h4><code><a href="https://github.com/AATHILDUCKY/aathil-ducky-webdevelopment-resources/blob/main/insert_input_data_in_mysql_database_php.txt">Source Code -> <b>Link here</b></a><br><br></code>',
    description: "insert , data , mysql, input, users data, sql",
  },
  // Add more data here...
];

// Function to split the search input into individual keywords
function getKeywords() {
  const input = document.getElementById("search").value;
  return input
    .toLowerCase()
    .split(",")
    .map((keyword) => keyword.trim());
}

// Function to check if a description contains all the keywords
function descriptionContainsKeywords(description, keywords) {
  return keywords.every((keyword) => description.includes(keyword));
}

// Function to search the cheat sheet and display results as cards
function searchCheatSheet() {
  const keywords = getKeywords();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  // Sort the data by description
  mynotes.sort((a, b) => a.description.localeCompare(b.description));

  for (const item of mynotes) {
    const header = item.header;
    const notes = item.notes;
    const description = item.description.toLowerCase();

    if (descriptionContainsKeywords(description, keywords)) {
      // Create a result card for each matching item
      const resultCard = document.createElement("div");
      resultCard.classList.add("result-card");

      const headerElement = document.createElement("h2");
      headerElement.innerText = header;

      const notesElement = document.createElement("p");
      // Use innerHTML to render HTML content in notes
      notesElement.innerHTML = notes;

      const desElement = document.createElement("h3");
      desElement.innerText = description;

      // Append elements to the result card
      resultCard.appendChild(headerElement);
      resultCard.appendChild(notesElement);
      resultCard.appendChild(desElement);

      // Append the result card to the results container
      resultsContainer.appendChild(resultCard);
    }
  }

  // Display a message if no results were found
  if (resultsContainer.children.length === 0) {
    resultsContainer.innerText = "No results found.";
  }
}

// Initial population of the result cards
searchCheatSheet();

// Add an event listener to the search input for auto-search
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchCheatSheet);
