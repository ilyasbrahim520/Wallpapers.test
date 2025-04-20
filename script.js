const wallpapers = [
  {
    thumb: "images/tesla-model-s-thumb.jpeg",
    full: "images/tesla-model-s.jpeg",
    alt: "Tesla Model S"
  },
  {
    thumb: "images/ferrari-f8-thumb.jpeg",
    full: "images/ferrari-f8.jpeg",
    alt: "Ferrari F8"
  },
  {
    thumb: "images/bmw-m4-thumb.jpeg",
    full: "images/bmw-m4.jpeg",
    alt: "BMW M4"
  },
  {
    thumb: "images/audi-r8-thumb.jpeg",
    full: "images/audi-r8.jpeg",
    alt: "Audi R8"
  },
  {
    thumb: "images/mercedes-amg-gt-thumb.jpeg",
    full: "images/mercedes-amg-gt.jpeg",
    alt: "Mercedes AMG GT"
  }
];

const gallery = document.getElementById("wallpaperGallery");

wallpapers.forEach(wallpaper => {
  const a = document.createElement("a");
  a.href = wallpaper.full;
  a.download = "";
  a.className = "wallpaper";

  const img = document.createElement("img");
  img.src = wallpaper.thumb;
  img.alt = wallpaper.alt;
  img.loading = "lazy";

  a.appendChild(img);
  gallery.appendChild(a);
});

// Toggle between light and dark mode
const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
});