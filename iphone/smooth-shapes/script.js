const wallpapers = [
  {
    thumb: "../../images/smooth-purple-pink-thimb.jpeg",
    full: "../../images/smooth-purple-pink.jpeg",
    alt: "Smooth Purple And Pink Wallpaper - by W-ilyas"
  },
  {
    thumb: "../../images/blue-pink-white-thumb.jpeg",
    full: "../../images/blue-pink-white.jpeg",
    alt: "Smooth blue And Pink And White Wallpaper - by W-ilyas"
  },
  {
    thumb: "../../images/soft-purple-mountains-thumb.jpg",
    full: "../../images/soft-purple-mountains.jpg",
    alt: "Soft Purple Mountains Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/smooth-circles-thumb.jpg",
    full: "../../images/smooth-circles.jpg",
    alt: "Smooth Circles Wallpaper - by W-ilyas"
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