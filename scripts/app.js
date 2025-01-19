const container = document.querySelector('.container');
const movieTitle = document.querySelector(".userInputTitle");
const MoviePosterUrl = document.querySelector(".userInputPosterUrl");
const button = document.querySelector("button");
const movieTitleToDisplay = document.querySelector(".favouriteMovieTitle");

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');

// Apply stored values if available
if (titleInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
}

if (imageUrlInStorage) {
    container.style.backgroundImage = `url("${imageUrlInStorage}")`;
}

button.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value.trim();
    let posterUrlInput = MoviePosterUrl.value.trim();

    // Update the background image of the container
    if (posterUrlInput) {
        container.style.backgroundImage = `url("${posterUrlInput}")`;
        localStorage.setItem("imageUrl", posterUrlInput);
    }

    // Update the movie title
    if (movieTitleInput) {
        movieTitleToDisplay.textContent = movieTitleInput;
        localStorage.setItem("title", movieTitleInput);
    }

    // Clear the input fields
    movieTitle.value = '';
    MoviePosterUrl.value = '';
});