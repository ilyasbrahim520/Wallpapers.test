const wallpapers = [
  {
    url: "images/tesla-model-s.jpeg",
    alt: "تيسلا موديل إس"
  },
  {
    url: "images/ferrari-f8.jpeg",
    alt: "فيراري إف 8"
  },
  {
    url: "images/bmw-m4.jpeg",
    alt: "بي إم دبليو M4"
  },
  {
    url: "images/audi-r8.jpeg",
    alt: "أودي R8"
  },
  {
    url: "images/mercedes-amg-gt.jpeg",
    alt: "مرسيدس AMG GT"
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

// زر التبديل بين الوضع الفاتح والداكن
const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});