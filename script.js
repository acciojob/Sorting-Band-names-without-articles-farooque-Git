//your code here
// Array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Nirvana'];

// Function to sort band names excluding articles
function sortBandNames(bandNames) {
  return bandNames.sort(function (a, b) {
    // Function to remove articles and trim whitespace
    const removeArticlesAndTrim = (str) => str.replace(/^(a|an|the)\s+/i, '').trim();

    // Compare the band names after removing articles
    const nameA = removeArticlesAndTrim(a).toLowerCase();
    const nameB = removeArticlesAndTrim(b).toLowerCase();

    return nameA.localeCompare(nameB);
  });
}

// Sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Get the ul element by its id
const ulElement = document.getElementById('band');

// Create and append li elements to the ul element
sortedBandNames.forEach(function (bandName) {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

