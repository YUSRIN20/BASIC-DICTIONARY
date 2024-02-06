# Basic Dictionary

This is a simple dictionary web application that allows users to search for word meanings along with audio pronunciation. The application is built using HTML, CSS, and JavaScript with Bootstrap for styling. It utilizes the Fetch API to retrieve word definitions from an external dictionary API.

## Features:

1. **Search Functionality**: Users can enter a word into the search input field and click the search button or press Enter to fetch the meanings and pronunciation for that word.

2. **Audio Pronunciation**: If available, the application provides an audio pronunciation for the searched word.

3. **Responsive Design**: The application is designed to be responsive, ensuring a consistent user experience across different devices and screen sizes.

4. **Error Handling**: The application includes error handling to notify users if there are any issues with fetching the word meanings or pronunciation. Users are prompted to try another word in case of errors.

## How to Use:

1. **Search**: Enter the word you want to search for in the provided input field and press Enter or click the search button.

2. **View Results**: Once the search is executed, the application will display the meanings of the word along with its pronunciation (if available).

## Technologies Used:

- **HTML**: Used for structuring the web page.
- **CSS**: Used for styling the application, including responsive design.
- **JavaScript**: Used to implement dynamic functionality, fetch data from the API, and handle user interactions.
- **Bootstrap**: Used for styling components and ensuring responsive layout.
- **Fetch API**: Utilized to retrieve data from the external dictionary API.
- **Dictionary API**: The application fetches word definitions and pronunciation from an external API (dictionaryapi.dev).

## Error Handling:

- If the user searches for an empty word, they are prompted with an alert message to enter a word.
- If there is an issue with fetching data from the external API, an error message is displayed to the user, suggesting them to try another word.

## Responsive Design:

The application is designed to adapt to different screen sizes, ensuring a seamless experience for users accessing it from various devices, including desktops, tablets, and mobile phones.

## How to Run:

To run the application, simply open the HTML file (`index.html`) in a web browser. Ensure an active internet connection is available for fetching data from the external API.

## Credits:

- This application utilizes the [dictionaryapi.dev](https://dictionaryapi.dev/) API for fetching word meanings and pronunciation.

## Author:

This dictionary web application was created by [Your Name].

## License:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Disclaimer:

This application fetches data from an external API and does not guarantee the accuracy or completeness of the word meanings and pronunciation provided.
