
/**Burger Menu */
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("active");
}



/**Carousel */

let currentIndex = 0;

function changeImage(thumbnail) {
  const mainImage = document.getElementById("main-image");
  const allThumbnails = document.querySelectorAll(".thumbnails img");
  currentIndex = Array.from(allThumbnails).indexOf(thumbnail);

  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = thumbnail.src;
    mainImage.style.opacity = 1;
  }, 200);

  allThumbnails.forEach(img => img.classList.remove("active"));
  thumbnail.classList.add("active");
}

function nextImage() {
  const allThumbnails = document.querySelectorAll(".thumbnails img");
  currentIndex = (currentIndex + 1) % allThumbnails.length;
  changeImage(allThumbnails[currentIndex]);
}

function prevImage() {
  const allThumbnails = document.querySelectorAll(".thumbnails img");
  currentIndex = (currentIndex - 1 + allThumbnails.length) % allThumbnails.length;
  changeImage(allThumbnails[currentIndex]);
}


