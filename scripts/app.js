const container = document.querySelector('.container');
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const movieYear = document.querySelector(".year");
const button = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favouriteMovieTitle");
const movieYearToDisplay = document.querySelector(".movieYear"); // Match the correct class

// Retrieve stored data
let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem("year");

if (titleInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
}

if (imageUrlInStorage) {
    container.style.backgroundImage = `url(${imageUrlInStorage})`;
}

if (yearInStorage) {
    movieYearToDisplay.textContent = `Year: ${yearInStorage}`;
}

// Add event listener to button
button.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value.trim();
    let posterUrlInput = moviePosterUrl.value.trim();
    let movieYearInput = movieYear.value.trim();

    if (posterUrlInput) {
        container.style.backgroundImage = `url(${posterUrlInput})`;
        localStorage.setItem("imageUrl", posterUrlInput);
    }

    if (movieTitleInput) {
        movieTitleToDisplay.textContent = movieTitleInput;
        localStorage.setItem("title", movieTitleInput);
    }

    if (movieYearInput) {
        movieYearToDisplay.textContent = `Year: ${movieYearInput}`;
        localStorage.setItem("year", movieYearInput);
    }

    // Clear input fields
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});