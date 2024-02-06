// Create a container div and append it to the document body
const containerdiv = document.createElement("div");
document.body.appendChild(containerdiv);
containerdiv.className = "container";

// Create and append an 'Enter The Word' heading to the container
const heading = containerdiv.appendChild(document.createElement("h1"));
heading.textContent = "Basic Dictionary";
heading.className = "text-center";

// Create and append a paragraph with instructions to the container
const paragraph = containerdiv.appendChild(document.createElement("p"))
paragraph.textContent = "Enter the correct word without spelling mistakes to get correct meanings"
paragraph.className = "text-center"

// Create a flex div and append it to the container
const Dflexdiv = containerdiv.appendChild(document.createElement("div"))
Dflexdiv.className = "d-flex"

// Create and append a search input to the flex div
const searchinput = Dflexdiv.appendChild(document.createElement("input"))
searchinput.type = "search"
searchinput.placeholder = "Search"
searchinput.id = "search-Input"
searchinput.className = "form-control me-2"

// Create and append a Search button to the flex div
const SearchBtn = Dflexdiv.appendChild(document.createElement("button"))
SearchBtn.className = "btn btn-outline-success"
SearchBtn.innerText = "Search"

// Create a row div and append it to the container
const rowdiv = containerdiv.appendChild(document.createElement("div"))
rowdiv.className = "row"
rowdiv.id = "row-div"

// Function to search for the word meaning
function search() {
    // Clear the previous search results
    rowdiv.innerHTML = "";
    const wordToLookup = document.getElementById("search-Input").value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToLookup}`;

    // Check if the search input is empty
    if (!wordToLookup) {
        alert('Please Enter The Word')
    }

    // Fetch data from the API
    fetch(apiUrl)
        .then((response) => response.json())
        .then((alldata) => {
            // console.log(alldata);

            // Create a card div for displaying the word meaning
            const carddiv = rowdiv.appendChild(document.createElement("div"))
            carddiv.className = "card mb-3 col-sm-6 col-md-12"
            carddiv.id = "card-div"

            // Create a card body div for the content of the card
            const cardbodydiv = carddiv.appendChild(document.createElement("div"))
            cardbodydiv.className = "card-body"

            // Create a heading for the word meaning
            const wordtitle = cardbodydiv.appendChild(document.createElement("h3"))
            wordtitle.className = "card-title"
            wordtitle.textContent = "Meaning of " + alldata[0].word.toUpperCase()

            // Create a div for audio-related elements
            const audiodiv = cardbodydiv.appendChild(document.createElement("div"))
            audiodiv.className = "d-flex"
            audiodiv.id = "audio-div"

            // Create an audio tag for pronunciation audio
            const audiotag = audiodiv.appendChild(document.createElement("audio"));
            audiotag.setAttribute("controls", true);
            audiotag.src = alldata[0].phonetics[0].audio;

            // Display a message if audio is not available
            if (alldata[0].phonetics[0].audio == '') {
                const paragraph2 = audiodiv.appendChild(document.createElement("p"))
                paragraph2.textContent = "Audio is not available"
                audiotag.style.display = "none"
            }

            // Create a div for the meanings and definitions
            const uldiv = cardbodydiv.appendChild(document.createElement("div"))
            uldiv.className = "uldiv"

            // Create an unordered list for meanings and definitions
            const ultag = uldiv.appendChild(document.createElement("ul"))

            // Iterate over meanings and definitions to display them
            for (let j = 0; j < alldata[0].meanings.length; j++) {
                for (let k = 0; k < alldata[0].meanings[j].definitions.length; k++) {
                    const litag = ultag.appendChild(document.createElement("li"));
                    litag.textContent = alldata[0].meanings[j].definitions[k].definition;
                }
            }
        })
        .catch((error) => {
            // Handle errors and display an error message to the user
            error = `Unable to Fetch the Meaning. Please Try Another Word`
            console.error("Error fetching data:", error);
            rowdiv.innerHTML = "";
            rowdiv.innerText = error
            wordtitle.append(rowdiv)
        });
}

// Add a click event listener to the Search button
SearchBtn.addEventListener("click", search);

// Add a keypress event listener to the search input for pressing Enter
const wordlook = document.getElementById("search-Input");
wordlook.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        search();
    }
});
