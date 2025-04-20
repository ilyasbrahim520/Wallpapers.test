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

// إنشاء عناصر الصور المصغرة
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

const toggleButton = document.getElementById("toggleMode");

// تعيين الوضع الافتراضي إلى Light
document.body.classList.add("light");

// تبديل الوضع عند الضغط على الزر
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    // إلى Light Mode
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    toggleButton.textContent = "Dark Mode";
  } else {
    // إلى Dark Mode
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    toggleButton.textContent = "Light Mode";
  }
});