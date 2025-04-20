const wallpapers = [
  {
    url: "images/tesla-model-s.jpeg",
    alt: "Tesla Model S"
  },
  {
    url: "images/ferrari-f8.jpeg",
    alt: "Ferrari F8"
  },
  {
    url: "images/bmw-m4.jpeg",
    alt: "BMW M4"
  },
  {
    url: "images/audi-r8.jpeg",
    alt: "Audi R8"
  },
  {
    url: "images/mercedes-amg-gt.jpeg",
    alt: "Mercedes AMG GT"
  }
];

const gallery = document.getElementById("wallpaperGallery");

wallpapers.forEach(wallpaper => {
  const a = document.createElement("a");
  a.href = wallpaper.url;
  a.download = "";
  a.className = "wallpaper";

  const img = document.createElement("img");
  img.src = wallpaper.url;
  img.alt = wallpaper.alt;

  a.appendChild(img);
  gallery.appendChild(a);
});

// Toggle between light and dark mode
const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change button text based on current mode
  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
});