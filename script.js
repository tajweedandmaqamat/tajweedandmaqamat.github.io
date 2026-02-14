const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const visitorCountElement = document.getElementById("visitor-count");
if (visitorCountElement) {
  fetch("https://api.countapi.xyz/hit/tajweedmaqamatacademy/visits")
    .then((response) => response.json())
    .then((data) => {
      visitorCountElement.textContent = data.value.toLocaleString();
    })
    .catch(() => {
      visitorCountElement.textContent = "Unavailable";
    });
}
