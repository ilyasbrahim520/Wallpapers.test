const wallpapers = [
  {
    thumb: "../../images/mountains-night-thumb.png",
    full: "../../images/mountains-night.png",
    alt: "Mountains at Night - by W-ilyas"
  },
  {
    thumb: "../../images/mountains-dusk-thumb.png",
    full: "../../images/mountains-dusk.png",
    alt: "Mountains at Dusk - by W-ilyas"
  },
  {
    thumb: "../../images/mountains-dawn-thumb.png",
    full: "../../images/mountains-dawn.png",
    alt: "Mountains at Dawn - by W-ilyas"
  },
  {
    thumb: "../../images/sea-night-thumb.png",
    full: "../../images/sea-night.png",
    alt: "Sea at Night - by W-ilyas"
  },
  {
    thumb: "../../images/sea-dusk-thumb.png",
    full: "../../images/sea-dusk.png",
    alt: "Sea at Night - by W-ilyas"
  },
  {
    thumb: "../../images/sea-dawn-thumb.png",
    full: "../../images/sea-dawn.png",
    alt: "Sea at Dawn - by W-ilyas"
  },
  {
    thumb: "../../images/fields-night-thumb.png",
    full: "../../images/fields-night.png",
    alt: "Fields at Night - by W-ilyas"
  },
  {
    thumb: "../../images/fields-dusk-thumb.png",
    full: "../../images/fields-dusk.png",
    alt: "Fields at Dusk - by W-ilyas"
  },
  {
    thumb: "../../images/fields-dawn-thumb.png",
    full: "../../images/fields-dawn.png",
    alt: "Fields at Dawn - by W-ilyas"
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