const wallpapers = [
    {
    thumb: "../../images/purple-black-thumb.jpeg",
    full: "../../images/purple-black.jpeg",
    alt: "Purple to Black Wallpaper - by W-ilyas"
  },
  {
    thumb: "../../images/ocean-black-thumb.jpeg",
    full: "../../images/ocean-black.jpeg",
    alt: "Sweet Porsche 911 front side - by W-ilyas"

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
  img.title = wallpaper.alt; // تحسين SEO
  img.loading = "lazy";

  a.appendChild(img);
  gallery.appendChild(a);
});

const toggleButton = document.getElementById("toggleMode");

// الوضع الافتراضي بناءً على تفضيل المستخدم
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
  toggleButton.textContent = "Light Mode";
} else {
  document.body.classList.add("light");
  toggleButton.textContent = "Dark Mode";
}

// تبديل الوضع عند الضغط على الزر
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    toggleButton.textContent = "Dark Mode";
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    toggleButton.textContent = "Light Mode";
  }
});